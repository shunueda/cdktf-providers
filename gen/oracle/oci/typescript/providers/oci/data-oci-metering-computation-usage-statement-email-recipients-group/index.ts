// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/metering_computation_usage_statement_email_recipients_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/metering_computation_usage_statement_email_recipients_group#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}
  */
  readonly emailRecipientsGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/metering_computation_usage_statement_email_recipients_group#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}
  */
  readonly subscriptionId: string;
}
export interface DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct {
}

export function dataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructToTerraform(struct?: DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructToHclTerraform(struct?: DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_id - computed: true, optional: false, required: false
  public get emailId() {
    return this.getStringAttribute('email_id');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference {
    return new DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/metering_computation_usage_statement_email_recipients_group oci_metering_computation_usage_statement_email_recipients_group}
*/
export class DataOciMeteringComputationUsageStatementEmailRecipientsGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_usage_statement_email_recipients_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMeteringComputationUsageStatementEmailRecipientsGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMeteringComputationUsageStatementEmailRecipientsGroup to import
  * @param importFromId The id of the existing DataOciMeteringComputationUsageStatementEmailRecipientsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/metering_computation_usage_statement_email_recipients_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMeteringComputationUsageStatementEmailRecipientsGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_metering_computation_usage_statement_email_recipients_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/metering_computation_usage_statement_email_recipients_group oci_metering_computation_usage_statement_email_recipients_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_usage_statement_email_recipients_group',
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
    this._compartmentId = config.compartmentId;
    this._emailRecipientsGroupId = config.emailRecipientsGroupId;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // email_recipients_group_id - computed: false, optional: false, required: true
  private _emailRecipientsGroupId?: string; 
  public get emailRecipientsGroupId() {
    return this.getStringAttribute('email_recipients_group_id');
  }
  public set emailRecipientsGroupId(value: string) {
    this._emailRecipientsGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRecipientsGroupIdInput() {
    return this._emailRecipientsGroupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recipients_list - computed: true, optional: false, required: false
  private _recipientsList = new DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList(this, "recipients_list", false);
  public get recipientsList() {
    return this._recipientsList;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      email_recipients_group_id: cdktf.stringToTerraform(this._emailRecipientsGroupId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_recipients_group_id: {
        value: cdktf.stringToHclTerraform(this._emailRecipientsGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
