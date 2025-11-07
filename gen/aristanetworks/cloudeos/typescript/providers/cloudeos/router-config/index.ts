// https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * CloudEOS image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#ami RouterConfig#ami}
  */
  readonly ami?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#availability_zone RouterConfig#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * aws/azure/gcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#cloud_provider RouterConfig#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * CloudEos Licensing Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#cloudeos_image_offer RouterConfig#cloudeos_image_offer}
  */
  readonly cloudeosImageOffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#cnps RouterConfig#cnps}
  */
  readonly cnps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#deploy_mode RouterConfig#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#id RouterConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#intf_name RouterConfig#intf_name}
  */
  readonly intfName: string[];
  /**
  * Private IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#intf_private_ip RouterConfig#intf_private_ip}
  */
  readonly intfPrivateIp: string[];
  /**
  * Interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#intf_type RouterConfig#intf_type}
  */
  readonly intfType: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#is_rr RouterConfig#is_rr}
  */
  readonly isRr?: boolean | cdktf.IResolvable;
  /**
  * AWS keypair name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#key_name RouterConfig#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#region RouterConfig#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#role RouterConfig#role}
  */
  readonly role?: string;
  /**
  * A mapping of tags to assign to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#tags RouterConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#topology_name RouterConfig#topology_name}
  */
  readonly topologyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#vpc_id RouterConfig#vpc_id}
  */
  readonly vpcId: string;
  /**
  * licenses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#licenses RouterConfig#licenses}
  */
  readonly licenses?: RouterConfigLicenses[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#timeouts RouterConfig#timeouts}
  */
  readonly timeouts?: RouterConfigTimeouts;
}
export interface RouterConfigLicenses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#hash RouterConfig#hash}
  */
  readonly hash: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#path RouterConfig#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#type RouterConfig#type}
  */
  readonly type: string;
}

export function routerConfigLicensesToTerraform(struct?: RouterConfigLicenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerConfigLicensesToHclTerraform(struct?: RouterConfigLicenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterConfigLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterConfigLicenses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterConfigLicenses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class RouterConfigLicensesList extends cdktf.ComplexList {
  public internalValue? : RouterConfigLicenses[] | cdktf.IResolvable

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
  public get(index: number): RouterConfigLicensesOutputReference {
    return new RouterConfigLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#create RouterConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#delete RouterConfig#delete}
  */
  readonly delete?: string;
}

export function routerConfigTimeoutsToTerraform(struct?: RouterConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function routerConfigTimeoutsToHclTerraform(struct?: RouterConfigTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RouterConfigTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config cloudeos_router_config}
*/
export class RouterConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudeos_router_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterConfig to import
  * @param importFromId The id of the existing RouterConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudeos_router_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_config cloudeos_router_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterConfigConfig
  */
  public constructor(scope: Construct, id: string, config: RouterConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudeos_router_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudeos',
        providerVersion: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ami = config.ami;
    this._availabilityZone = config.availabilityZone;
    this._cloudProvider = config.cloudProvider;
    this._cloudeosImageOffer = config.cloudeosImageOffer;
    this._cnps = config.cnps;
    this._deployMode = config.deployMode;
    this._id = config.id;
    this._intfName = config.intfName;
    this._intfPrivateIp = config.intfPrivateIp;
    this._intfType = config.intfType;
    this._isRr = config.isRr;
    this._keyName = config.keyName;
    this._region = config.region;
    this._role = config.role;
    this._tags = config.tags;
    this._topologyName = config.topologyName;
    this._vpcId = config.vpcId;
    this._licenses.internalValue = config.licenses;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ami - computed: false, optional: true, required: false
  private _ami?: string; 
  public get ami() {
    return this.getStringAttribute('ami');
  }
  public set ami(value: string) {
    this._ami = value;
  }
  public resetAmi() {
    this._ami = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiInput() {
    return this._ami;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // bootstrap_cfg - computed: true, optional: false, required: false
  public get bootstrapCfg() {
    return this.getStringAttribute('bootstrap_cfg');
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cloudeos_image_offer - computed: false, optional: true, required: false
  private _cloudeosImageOffer?: string; 
  public get cloudeosImageOffer() {
    return this.getStringAttribute('cloudeos_image_offer');
  }
  public set cloudeosImageOffer(value: string) {
    this._cloudeosImageOffer = value;
  }
  public resetCloudeosImageOffer() {
    this._cloudeosImageOffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudeosImageOfferInput() {
    return this._cloudeosImageOffer;
  }

  // cnps - computed: false, optional: true, required: false
  private _cnps?: string; 
  public get cnps() {
    return this.getStringAttribute('cnps');
  }
  public set cnps(value: string) {
    this._cnps = value;
  }
  public resetCnps() {
    this._cnps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnpsInput() {
    return this._cnps;
  }

  // deploy_mode - computed: true, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // ha_rtr_id - computed: true, optional: false, required: false
  public get haRtrId() {
    return this.getStringAttribute('ha_rtr_id');
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

  // internal_rt_table_id - computed: true, optional: false, required: false
  public get internalRtTableId() {
    return this.getListAttribute('internal_rt_table_id');
  }

  // intf_name - computed: false, optional: false, required: true
  private _intfName?: string[]; 
  public get intfName() {
    return this.getListAttribute('intf_name');
  }
  public set intfName(value: string[]) {
    this._intfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfNameInput() {
    return this._intfName;
  }

  // intf_private_ip - computed: false, optional: false, required: true
  private _intfPrivateIp?: string[]; 
  public get intfPrivateIp() {
    return this.getListAttribute('intf_private_ip');
  }
  public set intfPrivateIp(value: string[]) {
    this._intfPrivateIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfPrivateIpInput() {
    return this._intfPrivateIp;
  }

  // intf_type - computed: false, optional: false, required: true
  private _intfType?: string[]; 
  public get intfType() {
    return this.getListAttribute('intf_type');
  }
  public set intfType(value: string[]) {
    this._intfType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfTypeInput() {
    return this._intfType;
  }

  // is_rr - computed: false, optional: true, required: false
  private _isRr?: boolean | cdktf.IResolvable; 
  public get isRr() {
    return this.getBooleanAttribute('is_rr');
  }
  public set isRr(value: boolean | cdktf.IResolvable) {
    this._isRr = value;
  }
  public resetIsRr() {
    this._isRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRrInput() {
    return this._isRr;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // peer_routetable_id - computed: true, optional: false, required: false
  public get peerRoutetableId() {
    return this.getListAttribute('peer_routetable_id');
  }

  // peerroutetableid1 - computed: true, optional: false, required: false
  public get peerroutetableid1() {
    return this.getListAttribute('peerroutetableid1');
  }

  // private_rt_table_id - computed: true, optional: false, required: false
  public get privateRtTableId() {
    return this.getListAttribute('private_rt_table_id');
  }

  // public_rt_table_id - computed: true, optional: false, required: false
  public get publicRtTableId() {
    return this.getListAttribute('public_rt_table_id');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // tf_id - computed: true, optional: false, required: false
  public get tfId() {
    return this.getStringAttribute('tf_id');
  }

  // topology_name - computed: false, optional: false, required: true
  private _topologyName?: string; 
  public get topologyName() {
    return this.getStringAttribute('topology_name');
  }
  public set topologyName(value: string) {
    this._topologyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyNameInput() {
    return this._topologyName;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // licenses - computed: false, optional: true, required: false
  private _licenses = new RouterConfigLicensesList(this, "licenses", true);
  public get licenses() {
    return this._licenses;
  }
  public putLicenses(value: RouterConfigLicenses[] | cdktf.IResolvable) {
    this._licenses.internalValue = value;
  }
  public resetLicenses() {
    this._licenses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RouterConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RouterConfigTimeouts) {
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
      ami: cdktf.stringToTerraform(this._ami),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cloudeos_image_offer: cdktf.stringToTerraform(this._cloudeosImageOffer),
      cnps: cdktf.stringToTerraform(this._cnps),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      id: cdktf.stringToTerraform(this._id),
      intf_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfName),
      intf_private_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfPrivateIp),
      intf_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfType),
      is_rr: cdktf.booleanToTerraform(this._isRr),
      key_name: cdktf.stringToTerraform(this._keyName),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      topology_name: cdktf.stringToTerraform(this._topologyName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      licenses: cdktf.listMapper(routerConfigLicensesToTerraform, true)(this._licenses.internalValue),
      timeouts: routerConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ami: {
        value: cdktf.stringToHclTerraform(this._ami),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudeos_image_offer: {
        value: cdktf.stringToHclTerraform(this._cloudeosImageOffer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cnps: {
        value: cdktf.stringToHclTerraform(this._cnps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
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
      intf_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      intf_private_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfPrivateIp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      intf_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_rr: {
        value: cdktf.booleanToHclTerraform(this._isRr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
      topology_name: {
        value: cdktf.stringToHclTerraform(this._topologyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      licenses: {
        value: cdktf.listMapperHcl(routerConfigLicensesToHclTerraform, true)(this._licenses.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouterConfigLicensesList",
      },
      timeouts: {
        value: routerConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RouterConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
