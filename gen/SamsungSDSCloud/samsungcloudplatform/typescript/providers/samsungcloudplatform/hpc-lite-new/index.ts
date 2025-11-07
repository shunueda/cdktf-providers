// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcLiteNewConfig extends cdktf.TerraformMetaArguments {
  /**
  * HPC Lite(New) CO Pool ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#co_service_zone_id HpcLiteNew#co_service_zone_id}
  */
  readonly coServiceZoneId: string;
  /**
  * HPC Lite(New) Contract
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#contract HpcLiteNew#contract}
  */
  readonly contract: string;
  /**
  * HPC Lite(New) HT Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#hyper_threading_enabled HpcLiteNew#hyper_threading_enabled}
  */
  readonly hyperThreadingEnabled: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#id HpcLiteNew#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * HPC Lite(New) Image ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#image_id HpcLiteNew#image_id}
  */
  readonly imageId: string;
  /**
  * HPC Lite(New) Init Script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#init_script HpcLiteNew#init_script}
  */
  readonly initScript?: string;
  /**
  * HPC Lite(New) OS User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#os_user_id HpcLiteNew#os_user_id}
  */
  readonly osUserId: string;
  /**
  * HPC Lite(New) OS User PWD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#os_user_password HpcLiteNew#os_user_password}
  */
  readonly osUserPassword: string;
  /**
  * HPC Lite(New) Product Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#product_group_id HpcLiteNew#product_group_id}
  */
  readonly productGroupId: string;
  /**
  * HPC Lite(New) block Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#resource_pool_id HpcLiteNew#resource_pool_id}
  */
  readonly resourcePoolId: string;
  /**
  * HPC Lite(New) Server Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#server_type HpcLiteNew#server_type}
  */
  readonly serverType: string;
  /**
  * HPC Lite(New) Service Zone ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#service_zone_id HpcLiteNew#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#tags HpcLiteNew#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * HPC Lite(New) Vlan Pool CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#vlan_pool_cidr HpcLiteNew#vlan_pool_cidr}
  */
  readonly vlanPoolCidr: string;
  /**
  * server_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#server_details HpcLiteNew#server_details}
  */
  readonly serverDetails: HpcLiteNewServerDetails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#timeouts HpcLiteNew#timeouts}
  */
  readonly timeouts?: HpcLiteNewTimeouts;
}
export interface HpcLiteNewServerDetails {
  /**
  * HPC Lite(New) Server Detail ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#ip_address HpcLiteNew#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * HPC Lite(New) Server Detail Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#server_name HpcLiteNew#server_name}
  */
  readonly serverName: string;
}

export function hpcLiteNewServerDetailsToTerraform(struct?: HpcLiteNewServerDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function hpcLiteNewServerDetailsToHclTerraform(struct?: HpcLiteNewServerDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcLiteNewServerDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HpcLiteNewServerDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcLiteNewServerDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._serverName = value.serverName;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}

export class HpcLiteNewServerDetailsList extends cdktf.ComplexList {
  public internalValue? : HpcLiteNewServerDetails[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HpcLiteNewServerDetailsOutputReference {
    return new HpcLiteNewServerDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HpcLiteNewTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#create HpcLiteNew#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#delete HpcLiteNew#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#update HpcLiteNew#update}
  */
  readonly update?: string;
}

export function hpcLiteNewTimeoutsToTerraform(struct?: HpcLiteNewTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function hpcLiteNewTimeoutsToHclTerraform(struct?: HpcLiteNewTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcLiteNewTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HpcLiteNewTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcLiteNewTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new samsungcloudplatform_hpc_lite_new}
*/
export class HpcLiteNew extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_hpc_lite_new";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HpcLiteNew resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HpcLiteNew to import
  * @param importFromId The id of the existing HpcLiteNew that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HpcLiteNew to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_hpc_lite_new", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/hpc_lite_new samsungcloudplatform_hpc_lite_new} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HpcLiteNewConfig
  */
  public constructor(scope: Construct, id: string, config: HpcLiteNewConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_hpc_lite_new',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._coServiceZoneId = config.coServiceZoneId;
    this._contract = config.contract;
    this._hyperThreadingEnabled = config.hyperThreadingEnabled;
    this._id = config.id;
    this._imageId = config.imageId;
    this._initScript = config.initScript;
    this._osUserId = config.osUserId;
    this._osUserPassword = config.osUserPassword;
    this._productGroupId = config.productGroupId;
    this._resourcePoolId = config.resourcePoolId;
    this._serverType = config.serverType;
    this._serviceZoneId = config.serviceZoneId;
    this._tags = config.tags;
    this._vlanPoolCidr = config.vlanPoolCidr;
    this._serverDetails.internalValue = config.serverDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // co_service_zone_id - computed: false, optional: false, required: true
  private _coServiceZoneId?: string; 
  public get coServiceZoneId() {
    return this.getStringAttribute('co_service_zone_id');
  }
  public set coServiceZoneId(value: string) {
    this._coServiceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coServiceZoneIdInput() {
    return this._coServiceZoneId;
  }

  // contract - computed: false, optional: false, required: true
  private _contract?: string; 
  public get contract() {
    return this.getStringAttribute('contract');
  }
  public set contract(value: string) {
    this._contract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractInput() {
    return this._contract;
  }

  // hyper_threading_enabled - computed: false, optional: false, required: true
  private _hyperThreadingEnabled?: string; 
  public get hyperThreadingEnabled() {
    return this.getStringAttribute('hyper_threading_enabled');
  }
  public set hyperThreadingEnabled(value: string) {
    this._hyperThreadingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperThreadingEnabledInput() {
    return this._hyperThreadingEnabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // init_script - computed: false, optional: true, required: false
  private _initScript?: string; 
  public get initScript() {
    return this.getStringAttribute('init_script');
  }
  public set initScript(value: string) {
    this._initScript = value;
  }
  public resetInitScript() {
    this._initScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptInput() {
    return this._initScript;
  }

  // os_user_id - computed: false, optional: false, required: true
  private _osUserId?: string; 
  public get osUserId() {
    return this.getStringAttribute('os_user_id');
  }
  public set osUserId(value: string) {
    this._osUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osUserIdInput() {
    return this._osUserId;
  }

  // os_user_password - computed: false, optional: false, required: true
  private _osUserPassword?: string; 
  public get osUserPassword() {
    return this.getStringAttribute('os_user_password');
  }
  public set osUserPassword(value: string) {
    this._osUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osUserPasswordInput() {
    return this._osUserPassword;
  }

  // product_group_id - computed: false, optional: false, required: true
  private _productGroupId?: string; 
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }
  public set productGroupId(value: string) {
    this._productGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productGroupIdInput() {
    return this._productGroupId;
  }

  // resource_pool_id - computed: false, optional: false, required: true
  private _resourcePoolId?: string; 
  public get resourcePoolId() {
    return this.getStringAttribute('resource_pool_id');
  }
  public set resourcePoolId(value: string) {
    this._resourcePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolIdInput() {
    return this._resourcePoolId;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vlan_pool_cidr - computed: false, optional: false, required: true
  private _vlanPoolCidr?: string; 
  public get vlanPoolCidr() {
    return this.getStringAttribute('vlan_pool_cidr');
  }
  public set vlanPoolCidr(value: string) {
    this._vlanPoolCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPoolCidrInput() {
    return this._vlanPoolCidr;
  }

  // server_details - computed: false, optional: false, required: true
  private _serverDetails = new HpcLiteNewServerDetailsList(this, "server_details", false);
  public get serverDetails() {
    return this._serverDetails;
  }
  public putServerDetails(value: HpcLiteNewServerDetails[] | cdktf.IResolvable) {
    this._serverDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDetailsInput() {
    return this._serverDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HpcLiteNewTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HpcLiteNewTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      co_service_zone_id: cdktf.stringToTerraform(this._coServiceZoneId),
      contract: cdktf.stringToTerraform(this._contract),
      hyper_threading_enabled: cdktf.stringToTerraform(this._hyperThreadingEnabled),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      init_script: cdktf.stringToTerraform(this._initScript),
      os_user_id: cdktf.stringToTerraform(this._osUserId),
      os_user_password: cdktf.stringToTerraform(this._osUserPassword),
      product_group_id: cdktf.stringToTerraform(this._productGroupId),
      resource_pool_id: cdktf.stringToTerraform(this._resourcePoolId),
      server_type: cdktf.stringToTerraform(this._serverType),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vlan_pool_cidr: cdktf.stringToTerraform(this._vlanPoolCidr),
      server_details: cdktf.listMapper(hpcLiteNewServerDetailsToTerraform, true)(this._serverDetails.internalValue),
      timeouts: hpcLiteNewTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      co_service_zone_id: {
        value: cdktf.stringToHclTerraform(this._coServiceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract: {
        value: cdktf.stringToHclTerraform(this._contract),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyper_threading_enabled: {
        value: cdktf.stringToHclTerraform(this._hyperThreadingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init_script: {
        value: cdktf.stringToHclTerraform(this._initScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_user_id: {
        value: cdktf.stringToHclTerraform(this._osUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_user_password: {
        value: cdktf.stringToHclTerraform(this._osUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_group_id: {
        value: cdktf.stringToHclTerraform(this._productGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pool_id: {
        value: cdktf.stringToHclTerraform(this._resourcePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vlan_pool_cidr: {
        value: cdktf.stringToHclTerraform(this._vlanPoolCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_details: {
        value: cdktf.listMapperHcl(hpcLiteNewServerDetailsToHclTerraform, true)(this._serverDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HpcLiteNewServerDetailsList",
      },
      timeouts: {
        value: hpcLiteNewTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HpcLiteNewTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
