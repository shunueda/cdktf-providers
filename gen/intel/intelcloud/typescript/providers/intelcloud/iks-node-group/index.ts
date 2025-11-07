// https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IksNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#cluster_uuid IksNodeGroup#cluster_uuid}
  */
  readonly clusterUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#name IksNodeGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#node_count IksNodeGroup#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#node_type IksNodeGroup#node_type}
  */
  readonly nodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#ssh_public_key_names IksNodeGroup#ssh_public_key_names}
  */
  readonly sshPublicKeyNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#userdata_url IksNodeGroup#userdata_url}
  */
  readonly userdataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#vnets IksNodeGroup#vnets}
  */
  readonly vnets?: IksNodeGroupVnets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#timeouts IksNodeGroup#timeouts}
  */
  readonly timeouts?: IksNodeGroupTimeouts;
}
export interface IksNodeGroupVnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#availabilityzonename IksNodeGroup#availabilityzonename}
  */
  readonly availabilityzonename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#networkinterfacevnetname IksNodeGroup#networkinterfacevnetname}
  */
  readonly networkinterfacevnetname?: string;
}

export function iksNodeGroupVnetsToTerraform(struct?: IksNodeGroupVnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availabilityzonename: cdktf.stringToTerraform(struct!.availabilityzonename),
    networkinterfacevnetname: cdktf.stringToTerraform(struct!.networkinterfacevnetname),
  }
}


export function iksNodeGroupVnetsToHclTerraform(struct?: IksNodeGroupVnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availabilityzonename: {
      value: cdktf.stringToHclTerraform(struct!.availabilityzonename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkinterfacevnetname: {
      value: cdktf.stringToHclTerraform(struct!.networkinterfacevnetname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IksNodeGroupVnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IksNodeGroupVnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityzonename !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityzonename = this._availabilityzonename;
    }
    if (this._networkinterfacevnetname !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkinterfacevnetname = this._networkinterfacevnetname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IksNodeGroupVnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityzonename = undefined;
      this._networkinterfacevnetname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityzonename = value.availabilityzonename;
      this._networkinterfacevnetname = value.networkinterfacevnetname;
    }
  }

  // availabilityzonename - computed: true, optional: true, required: false
  private _availabilityzonename?: string; 
  public get availabilityzonename() {
    return this.getStringAttribute('availabilityzonename');
  }
  public set availabilityzonename(value: string) {
    this._availabilityzonename = value;
  }
  public resetAvailabilityzonename() {
    this._availabilityzonename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityzonenameInput() {
    return this._availabilityzonename;
  }

  // networkinterfacevnetname - computed: true, optional: true, required: false
  private _networkinterfacevnetname?: string; 
  public get networkinterfacevnetname() {
    return this.getStringAttribute('networkinterfacevnetname');
  }
  public set networkinterfacevnetname(value: string) {
    this._networkinterfacevnetname = value;
  }
  public resetNetworkinterfacevnetname() {
    this._networkinterfacevnetname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkinterfacevnetnameInput() {
    return this._networkinterfacevnetname;
  }
}

export class IksNodeGroupVnetsList extends cdktf.ComplexList {
  public internalValue? : IksNodeGroupVnets[] | cdktf.IResolvable

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
  public get(index: number): IksNodeGroupVnetsOutputReference {
    return new IksNodeGroupVnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IksNodeGroupTimeouts {
  /**
  * Timeout for nodegroup resource operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#resource_timeout IksNodeGroup#resource_timeout}
  */
  readonly resourceTimeout?: string;
}

export function iksNodeGroupTimeoutsToTerraform(struct?: IksNodeGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_timeout: cdktf.stringToTerraform(struct!.resourceTimeout),
  }
}


export function iksNodeGroupTimeoutsToHclTerraform(struct?: IksNodeGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_timeout: {
      value: cdktf.stringToHclTerraform(struct!.resourceTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IksNodeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IksNodeGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTimeout = this._resourceTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IksNodeGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTimeout = value.resourceTimeout;
    }
  }

  // resource_timeout - computed: true, optional: true, required: false
  private _resourceTimeout?: string; 
  public get resourceTimeout() {
    return this.getStringAttribute('resource_timeout');
  }
  public set resourceTimeout(value: string) {
    this._resourceTimeout = value;
  }
  public resetResourceTimeout() {
    this._resourceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTimeoutInput() {
    return this._resourceTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group intelcloud_iks_node_group}
*/
export class IksNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intelcloud_iks_node_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IksNodeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IksNodeGroup to import
  * @param importFromId The id of the existing IksNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IksNodeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intelcloud_iks_node_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_node_group intelcloud_iks_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IksNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: IksNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'intelcloud_iks_node_group',
      terraformGeneratorMetadata: {
        providerName: 'intelcloud',
        providerVersion: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterUuid = config.clusterUuid;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeType = config.nodeType;
    this._sshPublicKeyNames = config.sshPublicKeyNames;
    this._userdataUrl = config.userdataUrl;
    this._vnets.internalValue = config.vnets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_uuid - computed: false, optional: false, required: true
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // imiid - computed: true, optional: false, required: false
  public get imiid() {
    return this.getStringAttribute('imiid');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // ssh_public_key_names - computed: false, optional: false, required: true
  private _sshPublicKeyNames?: string[]; 
  public get sshPublicKeyNames() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_public_key_names'));
  }
  public set sshPublicKeyNames(value: string[]) {
    this._sshPublicKeyNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyNamesInput() {
    return this._sshPublicKeyNames;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // userdata_url - computed: true, optional: true, required: false
  private _userdataUrl?: string; 
  public get userdataUrl() {
    return this.getStringAttribute('userdata_url');
  }
  public set userdataUrl(value: string) {
    this._userdataUrl = value;
  }
  public resetUserdataUrl() {
    this._userdataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataUrlInput() {
    return this._userdataUrl;
  }

  // vnets - computed: true, optional: true, required: false
  private _vnets = new IksNodeGroupVnetsList(this, "vnets", false);
  public get vnets() {
    return this._vnets;
  }
  public putVnets(value: IksNodeGroupVnets[] | cdktf.IResolvable) {
    this._vnets.internalValue = value;
  }
  public resetVnets() {
    this._vnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetsInput() {
    return this._vnets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IksNodeGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IksNodeGroupTimeouts) {
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
      cluster_uuid: cdktf.stringToTerraform(this._clusterUuid),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_type: cdktf.stringToTerraform(this._nodeType),
      ssh_public_key_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKeyNames),
      userdata_url: cdktf.stringToTerraform(this._userdataUrl),
      vnets: cdktf.listMapper(iksNodeGroupVnetsToTerraform, false)(this._vnets.internalValue),
      timeouts: iksNodeGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._clusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKeyNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      userdata_url: {
        value: cdktf.stringToHclTerraform(this._userdataUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnets: {
        value: cdktf.listMapperHcl(iksNodeGroupVnetsToHclTerraform, false)(this._vnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IksNodeGroupVnetsList",
      },
      timeouts: {
        value: iksNodeGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IksNodeGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
