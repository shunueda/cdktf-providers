// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentsIdBrokerMappingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings#data_access_role EnvironmentsIdBrokerMappings#data_access_role}
  */
  readonly dataAccessRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings#environment_crn EnvironmentsIdBrokerMappings#environment_crn}
  */
  readonly environmentCrn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings#environment_name EnvironmentsIdBrokerMappings#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings#mappings EnvironmentsIdBrokerMappings#mappings}
  */
  readonly mappings?: EnvironmentsIdBrokerMappingsMappings[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings#ranger_audit_role EnvironmentsIdBrokerMappings#ranger_audit_role}
  */
  readonly rangerAuditRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings#ranger_cloud_access_authorizer_role EnvironmentsIdBrokerMappings#ranger_cloud_access_authorizer_role}
  */
  readonly rangerCloudAccessAuthorizerRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings#set_empty_mappings EnvironmentsIdBrokerMappings#set_empty_mappings}
  */
  readonly setEmptyMappings?: boolean | cdktf.IResolvable;
}
export interface EnvironmentsIdBrokerMappingsMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings#accessor_crn EnvironmentsIdBrokerMappings#accessor_crn}
  */
  readonly accessorCrn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings#role EnvironmentsIdBrokerMappings#role}
  */
  readonly role: string;
}

export function environmentsIdBrokerMappingsMappingsToTerraform(struct?: EnvironmentsIdBrokerMappingsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessor_crn: cdktf.stringToTerraform(struct!.accessorCrn),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function environmentsIdBrokerMappingsMappingsToHclTerraform(struct?: EnvironmentsIdBrokerMappingsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessor_crn: {
      value: cdktf.stringToHclTerraform(struct!.accessorCrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsIdBrokerMappingsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentsIdBrokerMappingsMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessorCrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessorCrn = this._accessorCrn;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsIdBrokerMappingsMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessorCrn = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessorCrn = value.accessorCrn;
      this._role = value.role;
    }
  }

  // accessor_crn - computed: false, optional: false, required: true
  private _accessorCrn?: string; 
  public get accessorCrn() {
    return this.getStringAttribute('accessor_crn');
  }
  public set accessorCrn(value: string) {
    this._accessorCrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessorCrnInput() {
    return this._accessorCrn;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class EnvironmentsIdBrokerMappingsMappingsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentsIdBrokerMappingsMappings[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentsIdBrokerMappingsMappingsOutputReference {
    return new EnvironmentsIdBrokerMappingsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings cdp_environments_id_broker_mappings}
*/
export class EnvironmentsIdBrokerMappings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_id_broker_mappings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentsIdBrokerMappings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentsIdBrokerMappings to import
  * @param importFromId The id of the existing EnvironmentsIdBrokerMappings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentsIdBrokerMappings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_id_broker_mappings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_id_broker_mappings cdp_environments_id_broker_mappings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentsIdBrokerMappingsConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentsIdBrokerMappingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_id_broker_mappings',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8',
        providerVersionConstraint: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataAccessRole = config.dataAccessRole;
    this._environmentCrn = config.environmentCrn;
    this._environmentName = config.environmentName;
    this._mappings.internalValue = config.mappings;
    this._rangerAuditRole = config.rangerAuditRole;
    this._rangerCloudAccessAuthorizerRole = config.rangerCloudAccessAuthorizerRole;
    this._setEmptyMappings = config.setEmptyMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_access_role - computed: true, optional: true, required: false
  private _dataAccessRole?: string; 
  public get dataAccessRole() {
    return this.getStringAttribute('data_access_role');
  }
  public set dataAccessRole(value: string) {
    this._dataAccessRole = value;
  }
  public resetDataAccessRole() {
    this._dataAccessRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessRoleInput() {
    return this._dataAccessRole;
  }

  // environment_crn - computed: false, optional: false, required: true
  private _environmentCrn?: string; 
  public get environmentCrn() {
    return this.getStringAttribute('environment_crn');
  }
  public set environmentCrn(value: string) {
    this._environmentCrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentCrnInput() {
    return this._environmentCrn;
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new EnvironmentsIdBrokerMappingsMappingsList(this, "mappings", true);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: EnvironmentsIdBrokerMappingsMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // mappings_version - computed: true, optional: false, required: false
  public get mappingsVersion() {
    return this.getNumberAttribute('mappings_version');
  }

  // ranger_audit_role - computed: false, optional: false, required: true
  private _rangerAuditRole?: string; 
  public get rangerAuditRole() {
    return this.getStringAttribute('ranger_audit_role');
  }
  public set rangerAuditRole(value: string) {
    this._rangerAuditRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangerAuditRoleInput() {
    return this._rangerAuditRole;
  }

  // ranger_cloud_access_authorizer_role - computed: true, optional: true, required: false
  private _rangerCloudAccessAuthorizerRole?: string; 
  public get rangerCloudAccessAuthorizerRole() {
    return this.getStringAttribute('ranger_cloud_access_authorizer_role');
  }
  public set rangerCloudAccessAuthorizerRole(value: string) {
    this._rangerCloudAccessAuthorizerRole = value;
  }
  public resetRangerCloudAccessAuthorizerRole() {
    this._rangerCloudAccessAuthorizerRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangerCloudAccessAuthorizerRoleInput() {
    return this._rangerCloudAccessAuthorizerRole;
  }

  // set_empty_mappings - computed: false, optional: true, required: false
  private _setEmptyMappings?: boolean | cdktf.IResolvable; 
  public get setEmptyMappings() {
    return this.getBooleanAttribute('set_empty_mappings');
  }
  public set setEmptyMappings(value: boolean | cdktf.IResolvable) {
    this._setEmptyMappings = value;
  }
  public resetSetEmptyMappings() {
    this._setEmptyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setEmptyMappingsInput() {
    return this._setEmptyMappings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_access_role: cdktf.stringToTerraform(this._dataAccessRole),
      environment_crn: cdktf.stringToTerraform(this._environmentCrn),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      mappings: cdktf.listMapper(environmentsIdBrokerMappingsMappingsToTerraform, false)(this._mappings.internalValue),
      ranger_audit_role: cdktf.stringToTerraform(this._rangerAuditRole),
      ranger_cloud_access_authorizer_role: cdktf.stringToTerraform(this._rangerCloudAccessAuthorizerRole),
      set_empty_mappings: cdktf.booleanToTerraform(this._setEmptyMappings),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_access_role: {
        value: cdktf.stringToHclTerraform(this._dataAccessRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_crn: {
        value: cdktf.stringToHclTerraform(this._environmentCrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappings: {
        value: cdktf.listMapperHcl(environmentsIdBrokerMappingsMappingsToHclTerraform, false)(this._mappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnvironmentsIdBrokerMappingsMappingsList",
      },
      ranger_audit_role: {
        value: cdktf.stringToHclTerraform(this._rangerAuditRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ranger_cloud_access_authorizer_role: {
        value: cdktf.stringToHclTerraform(this._rangerCloudAccessAuthorizerRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_empty_mappings: {
        value: cdktf.booleanToHclTerraform(this._setEmptyMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
