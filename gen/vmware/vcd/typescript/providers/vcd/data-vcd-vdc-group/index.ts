// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdVdcGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default Policy Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#default_policy_status DataVcdVdcGroup#default_policy_status}
  */
  readonly defaultPolicyStatus?: boolean | cdktf.IResolvable;
  /**
  * VDC group description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#description DataVcdVdcGroup#description}
  */
  readonly description?: string;
  /**
  * More detailed error message when VDC group has error status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#error_message DataVcdVdcGroup#error_message}
  */
  readonly errorMessage?: string;
  /**
  * VDC group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#id DataVcdVdcGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Status whether local egress is enabled for a universal router belonging to a universal VDC group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#local_egress DataVcdVdcGroup#local_egress}
  */
  readonly localEgress?: boolean | cdktf.IResolvable;
  /**
  * Name of VDC group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#name DataVcdVdcGroup#name}
  */
  readonly name?: string;
  /**
  * ID of used network pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#network_pool_id DataVcdVdcGroup#network_pool_id}
  */
  readonly networkPoolId?: string;
  /**
  * The network provider’s universal id that is backing the universal network pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#network_pool_universal_id DataVcdVdcGroup#network_pool_universal_id}
  */
  readonly networkPoolUniversalId?: string;
  /**
  * Defines the networking provider backing the VDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#network_provider_type DataVcdVdcGroup#network_provider_type}
  */
  readonly networkProviderType?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#org DataVcdVdcGroup#org}
  */
  readonly org?: string;
  /**
  * The status that the group can be in (e.g. 'SAVING', 'SAVED', 'CONFIGURING', 'REALIZED', 'REALIZATION_FAILED', 'DELETING', 'DELETE_FAILED', 'OBJECT_NOT_FOUND', 'UNCONFIGURED')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#status DataVcdVdcGroup#status}
  */
  readonly status?: string;
  /**
  * Defines the group as LOCAL or UNIVERSAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#type DataVcdVdcGroup#type}
  */
  readonly type?: string;
  /**
  * True means that a VDC group router has been created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#universal_networking_enabled DataVcdVdcGroup#universal_networking_enabled}
  */
  readonly universalNetworkingEnabled?: boolean | cdktf.IResolvable;
}
export interface DataVcdVdcGroupParticipatingOrgVdcs {
}

export function dataVcdVdcGroupParticipatingOrgVdcsToTerraform(struct?: DataVcdVdcGroupParticipatingOrgVdcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdVdcGroupParticipatingOrgVdcsToHclTerraform(struct?: DataVcdVdcGroupParticipatingOrgVdcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdVdcGroupParticipatingOrgVdcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVcdVdcGroupParticipatingOrgVdcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdVdcGroupParticipatingOrgVdcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fault_domain_tag - computed: true, optional: false, required: false
  public get faultDomainTag() {
    return this.getStringAttribute('fault_domain_tag');
  }

  // is_remote_org - computed: true, optional: false, required: false
  public get isRemoteOrg() {
    return this.getBooleanAttribute('is_remote_org');
  }

  // network_provider_scope - computed: true, optional: false, required: false
  public get networkProviderScope() {
    return this.getStringAttribute('network_provider_scope');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // org_name - computed: true, optional: false, required: false
  public get orgName() {
    return this.getStringAttribute('org_name');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vdc_id - computed: true, optional: false, required: false
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }

  // vdc_name - computed: true, optional: false, required: false
  public get vdcName() {
    return this.getStringAttribute('vdc_name');
  }
}

export class DataVcdVdcGroupParticipatingOrgVdcsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdVdcGroupParticipatingOrgVdcsOutputReference {
    return new DataVcdVdcGroupParticipatingOrgVdcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group vcd_vdc_group}
*/
export class DataVcdVdcGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vdc_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdVdcGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdVdcGroup to import
  * @param importFromId The id of the existing DataVcdVdcGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdVdcGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vdc_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vdc_group vcd_vdc_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdVdcGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVcdVdcGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_vdc_group',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultPolicyStatus = config.defaultPolicyStatus;
    this._description = config.description;
    this._errorMessage = config.errorMessage;
    this._id = config.id;
    this._localEgress = config.localEgress;
    this._name = config.name;
    this._networkPoolId = config.networkPoolId;
    this._networkPoolUniversalId = config.networkPoolUniversalId;
    this._networkProviderType = config.networkProviderType;
    this._org = config.org;
    this._status = config.status;
    this._type = config.type;
    this._universalNetworkingEnabled = config.universalNetworkingEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_policy_status - computed: true, optional: true, required: false
  private _defaultPolicyStatus?: boolean | cdktf.IResolvable; 
  public get defaultPolicyStatus() {
    return this.getBooleanAttribute('default_policy_status');
  }
  public set defaultPolicyStatus(value: boolean | cdktf.IResolvable) {
    this._defaultPolicyStatus = value;
  }
  public resetDefaultPolicyStatus() {
    this._defaultPolicyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyStatusInput() {
    return this._defaultPolicyStatus;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dfw_enabled - computed: true, optional: false, required: false
  public get dfwEnabled() {
    return this.getBooleanAttribute('dfw_enabled');
  }

  // error_message - computed: true, optional: true, required: false
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  public resetErrorMessage() {
    this._errorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
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

  // local_egress - computed: true, optional: true, required: false
  private _localEgress?: boolean | cdktf.IResolvable; 
  public get localEgress() {
    return this.getBooleanAttribute('local_egress');
  }
  public set localEgress(value: boolean | cdktf.IResolvable) {
    this._localEgress = value;
  }
  public resetLocalEgress() {
    this._localEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localEgressInput() {
    return this._localEgress;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_pool_id - computed: true, optional: true, required: false
  private _networkPoolId?: string; 
  public get networkPoolId() {
    return this.getStringAttribute('network_pool_id');
  }
  public set networkPoolId(value: string) {
    this._networkPoolId = value;
  }
  public resetNetworkPoolId() {
    this._networkPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoolIdInput() {
    return this._networkPoolId;
  }

  // network_pool_universal_id - computed: true, optional: true, required: false
  private _networkPoolUniversalId?: string; 
  public get networkPoolUniversalId() {
    return this.getStringAttribute('network_pool_universal_id');
  }
  public set networkPoolUniversalId(value: string) {
    this._networkPoolUniversalId = value;
  }
  public resetNetworkPoolUniversalId() {
    this._networkPoolUniversalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoolUniversalIdInput() {
    return this._networkPoolUniversalId;
  }

  // network_provider_type - computed: true, optional: true, required: false
  private _networkProviderType?: string; 
  public get networkProviderType() {
    return this.getStringAttribute('network_provider_type');
  }
  public set networkProviderType(value: string) {
    this._networkProviderType = value;
  }
  public resetNetworkProviderType() {
    this._networkProviderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProviderTypeInput() {
    return this._networkProviderType;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // participating_org_vdcs - computed: true, optional: false, required: false
  private _participatingOrgVdcs = new DataVcdVdcGroupParticipatingOrgVdcsList(this, "participating_org_vdcs", true);
  public get participatingOrgVdcs() {
    return this._participatingOrgVdcs;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // universal_networking_enabled - computed: true, optional: true, required: false
  private _universalNetworkingEnabled?: boolean | cdktf.IResolvable; 
  public get universalNetworkingEnabled() {
    return this.getBooleanAttribute('universal_networking_enabled');
  }
  public set universalNetworkingEnabled(value: boolean | cdktf.IResolvable) {
    this._universalNetworkingEnabled = value;
  }
  public resetUniversalNetworkingEnabled() {
    this._universalNetworkingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universalNetworkingEnabledInput() {
    return this._universalNetworkingEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_policy_status: cdktf.booleanToTerraform(this._defaultPolicyStatus),
      description: cdktf.stringToTerraform(this._description),
      error_message: cdktf.stringToTerraform(this._errorMessage),
      id: cdktf.stringToTerraform(this._id),
      local_egress: cdktf.booleanToTerraform(this._localEgress),
      name: cdktf.stringToTerraform(this._name),
      network_pool_id: cdktf.stringToTerraform(this._networkPoolId),
      network_pool_universal_id: cdktf.stringToTerraform(this._networkPoolUniversalId),
      network_provider_type: cdktf.stringToTerraform(this._networkProviderType),
      org: cdktf.stringToTerraform(this._org),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      universal_networking_enabled: cdktf.booleanToTerraform(this._universalNetworkingEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_policy_status: {
        value: cdktf.booleanToHclTerraform(this._defaultPolicyStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_message: {
        value: cdktf.stringToHclTerraform(this._errorMessage),
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
      local_egress: {
        value: cdktf.booleanToHclTerraform(this._localEgress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_pool_id: {
        value: cdktf.stringToHclTerraform(this._networkPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_pool_universal_id: {
        value: cdktf.stringToHclTerraform(this._networkPoolUniversalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_provider_type: {
        value: cdktf.stringToHclTerraform(this._networkProviderType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      universal_networking_enabled: {
        value: cdktf.booleanToHclTerraform(this._universalNetworkingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
