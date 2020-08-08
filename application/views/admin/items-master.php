
    <link rel="stylesheet" type="text/css" href="<?=base_url()?>app-assets/vendors/css/tables/datatable/datatables.min.css">
    <!-- BEGIN: Content-->
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-12 mb-2 mt-1">
                    <div class="row breadcrumbs-top">
                        <div class="col-md-9">
                            <h5 class="content-header-title float-left pr-1 mb-0">Items master</h5>
                            <div class="breadcrumb-wrapper col-12">
                                <ol class="breadcrumb p-0 mb-0">
                                    <li class="breadcrumb-item"><a href="<?=base_url('admin')?>"><i class="bx bx-home-alt"></i></a></li>
                                    <li class="breadcrumb-item active">Items master</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header row">
                                <h4 class="card-title col-sm-9">List of all the items</h4>
                                <div class="col-sm-3 text-sm-right mt-1 mt-sm-0">
                                    <a href="<?=base_url()?>add-item" class="btn btn-sm btn-primary">+ Add new item</a>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="card-body card-dashboard">
                                    <div class="table-responsive">
                                        <table class="table table-striped order-dt">
                                            <thead>
                                                <tr>
                                                    <th>Item ID</th>
                                                    <th>Image</th>
                                                    <th>Item name</th>
                                                    <th>Unit name</th>
                                                    <th>Hawker price</th>
                                                    <th>Customer price</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <?php foreach($data as $d){?>
                                                <tr>
                                                    <td><?=$d->id?></td>
                                                    <td><img src="<?=base_url('assets/images/items/').$d->item_img?>" alt="<?=$d->item_name?>" width="80"></td>
                                                    <td><?=$d->item_name?></td>
                                                    <td><?=$d->unit_short_name?></td>
                                                    <td><?=$d->item_price_kart?>/-</td>
                                                    <td><?=$d->item_price_customer?>/-</td>
                                                    <?php if($d->is_active==1){?>
                                                        <td class="text-success">Active</td>
                                                    <?php } else {?>
                                                        <td class="text-warning">Inactive</td>
                                                    <?php }?>
                                                    <td class=''>
                                                        <a href="<?=base_url('toggle-item-status/').$d->id.'/'.$d->is_active?>"  onclick="return confirm('Change status of this item?');" class="" data-toggle="tooltip" data-placement="top" title="Toggle status"><i class="badge-circle badge-circle-light-secondary text-info bx bx-transfer-alt font-medium-1"></i></a>

                                                        <a href="<?=base_url('edit-item/').$d->id?>" class="mx-md-1 mx-0 my-1 my-md-0" data-toggle="tooltip" data-placement="top" title="Edit item"><i class="badge-circle badge-circle-light-secondary text-primary bx bx-edit font-medium-1"></i></a>

                                                        <a href="<?=base_url('delete-item/').$d->id?>"  onclick="return confirm('Delete this item?');" class="" data-toggle="tooltip" data-placement="top" title="Delete item"><i class="badge-circle badge-circle-light-secondary text-danger bx bx-trash font-medium-1"></i></a>
                                                    </td>
                                                </tr>
                                            <?php }?>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- END: Content-->

    <script src="<?=base_url()?>app-assets/vendors/js/tables/datatable/datatables.min.js"></script>
    <script src="<?=base_url()?>app-assets/vendors/js/tables/datatable/dataTables.bootstrap4.min.js"></script>
    <script src="<?=base_url()?>app-assets/vendors/js/tables/datatable/dataTables.buttons.min.js"></script>
    <script src="<?=base_url()?>app-assets/vendors/js/tables/datatable/buttons.html5.min.js"></script>
    <script src="<?=base_url()?>app-assets/vendors/js/tables/datatable/buttons.print.min.js"></script>
    <script src="<?=base_url()?>app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js"></script>
    <script src="<?=base_url()?>app-assets/vendors/js/tables/datatable/pdfmake.min.js"></script>
    <script src="<?=base_url()?>app-assets/vendors/js/tables/datatable/vfs_fonts.js"></script>
    
    <script src="<?=base_url()?>app-assets/js/scripts/datatables/datatable.js"></script>
