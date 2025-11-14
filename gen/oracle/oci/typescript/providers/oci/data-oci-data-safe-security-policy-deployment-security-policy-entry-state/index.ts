// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_deployment_id}
  */
  readonly securityPolicyDeploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_entry_state_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_entry_state_id}
  */
  readonly securityPolicyEntryStateId: string;
}
export interface DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails {
}

export function dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsToTerraform(struct?: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsToHclTerraform(struct?: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datasafe_user_exclusion_status - computed: true, optional: false, required: false
  public get datasafeUserExclusionStatus() {
    return this.getStringAttribute('datasafe_user_exclusion_status');
  }

  // entry_type - computed: true, optional: false, required: false
  public get entryType() {
    return this.getStringAttribute('entry_type');
  }

  // exclude_datasafe_user_failure_msg - computed: true, optional: false, required: false
  public get excludeDatasafeUserFailureMsg() {
    return this.getStringAttribute('exclude_datasafe_user_failure_msg');
  }

  // time_generated - computed: true, optional: false, required: false
  public get timeGenerated() {
    return this.getStringAttribute('time_generated');
  }

  // time_status_updated - computed: true, optional: false, required: false
  public get timeStatusUpdated() {
    return this.getStringAttribute('time_status_updated');
  }
}

export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference {
    return new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state oci_data_safe_security_policy_deployment_security_policy_entry_state}
*/
export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_policy_deployment_security_policy_entry_state";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_policy_deployment_security_policy_entry_state", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state oci_data_safe_security_policy_deployment_security_policy_entry_state} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_policy_deployment_security_policy_entry_state',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._securityPolicyDeploymentId = config.securityPolicyDeploymentId;
    this._securityPolicyEntryStateId = config.securityPolicyEntryStateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // deployment_status_details - computed: true, optional: false, required: false
  public get deploymentStatusDetails() {
    return this.getStringAttribute('deployment_status_details');
  }

  // entry_details - computed: true, optional: false, required: false
  private _entryDetails = new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList(this, "entry_details", false);
  public get entryDetails() {
    return this._entryDetails;
  }

  // entry_type - computed: true, optional: false, required: false
  public get entryType() {
    return this.getStringAttribute('entry_type');
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

  // security_policy_deployment_id - computed: false, optional: false, required: true
  private _securityPolicyDeploymentId?: string; 
  public get securityPolicyDeploymentId() {
    return this.getStringAttribute('security_policy_deployment_id');
  }
  public set securityPolicyDeploymentId(value: string) {
    this._securityPolicyDeploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyDeploymentIdInput() {
    return this._securityPolicyDeploymentId;
  }

  // security_policy_entry_id - computed: true, optional: false, required: false
  public get securityPolicyEntryId() {
    return this.getStringAttribute('security_policy_entry_id');
  }

  // security_policy_entry_state_id - computed: false, optional: false, required: true
  private _securityPolicyEntryStateId?: string; 
  public get securityPolicyEntryStateId() {
    return this.getStringAttribute('security_policy_entry_state_id');
  }
  public set securityPolicyEntryStateId(value: string) {
    this._securityPolicyEntryStateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyEntryStateIdInput() {
    return this._securityPolicyEntryStateId;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      security_policy_deployment_id: cdktf.stringToTerraform(this._securityPolicyDeploymentId),
      security_policy_entry_state_id: cdktf.stringToTerraform(this._securityPolicyEntryStateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_deployment_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyDeploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_entry_state_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyEntryStateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
