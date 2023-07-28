<?php

namespace Tablesome\Includes\Modules\Datatable;

if (!class_exists('\Tablesome\Includes\Modules\Datatable\Datatable')) {
    class Datatable
    {
        public $wpdb;
        public $wp_prefix;
        public $table_name;
        public $records;
        public $columns;
        public $options;
        public $post;
        public $settings;
        public $access_controller;
        public $record;

        // public $source;

        public function __construct()
        {
            global $wpdb;
            $this->wpdb = $wpdb;
            $this->wp_prefix = $this->wpdb->prefix;

            $this->post = new \Tablesome\Includes\Modules\Datatable\Post();

            // Single Records
            $this->records = new \Tablesome\Includes\Modules\Datatable\Records($this);

            // Single Record
            $this->record = new \Tablesome\Includes\Modules\Datatable\Record($this);
            $this->settings = new \Tablesome\Includes\Modules\Datatable\Settings();

            $this->access_controller = new \Tablesome\Components\TablesomeDB\Access_Controller();

        }

        public function can_update_table($args)
        {
            // default
            $user_can_update = false;

            $table_meta_data = isset($args['meta_data']) ? $args['meta_data'] : [];
            $permissions = $this->access_controller->get_permissions($table_meta_data);

            $mode = isset($args['mode']) ? $args['mode'] : '';
            $is_admin_area = ($mode == 'editor');
            $user_can_edit = isset($permissions['can_edit']) ? $permissions['can_edit'] : false;

            if ($is_admin_area || $user_can_edit) {
                $user_can_update = true;
                return $user_can_update;
            }

            return $user_can_update;
        }

        public function get_table_name($table_id, $prefix = 1)
        {
            if (!is_numeric($table_id)) {return $table_id;}

            $table_name = TABLESOME_TABLE_NAME . '_' . $table_id;
            if ($prefix == 0) {
                return $table_name;
            }
            return $this->wp_prefix . $table_name;
        }

        public function get_table()
        {

        }

        // create or update table
        // public function save_table($params)
        // {
        //     $can_save_table = $this->can_save_table($params);

        //     if (!$can_save_table) {
        //         return;
        //     }

        //     // Create a WordPress post of tablesome's post_type (if not update)

        //     if ($params['mode'] == 'create') {
        //         $params = $this->create_cpt_post($params);
        //         $params = $this->create_db_table($params);
        //     }

        //     $this->save_table_settings($params);

        //     $this->records->save($params);

        //     return $this->send_response($params);
        // }

        // public function can_save_table($params)
        // {
        //     $can_save_table = false;

        //     // Early Return
        //     if ($params['mode'] == 'read-only') {
        //         return $can_save_table;
        //     }

        //     // User Permissions

        //     return $can_save_table;
        // }

        // public function delete_table()
        // {

        // }

    } // END CLASS

}
