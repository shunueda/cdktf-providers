// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opa_opa_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpaOpaInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opa_opa_instance#opa_instance_id DataOciOpaOpaInstance#opa_instance_id}
  */
  readonly opaInstanceId: string;
}
export interface DataOciOpaOpaInstanceAttachments {
}

export function dataOciOpaOpaInstanceAttachmentsToTerraform(struct?: DataOciOpaOpaInstanceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpaOpaInstanceAttachmentsToHclTerraform(struct?: DataOciOpaOpaInstanceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpaOpaInstanceAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpaOpaInstanceAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpaOpaInstanceAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_implicit - computed: true, optional: false, required: false
  public get isImplicit() {
    return this.getBooleanAttribute('is_implicit');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_instance_url - computed: true, optional: false, required: false
  public get targetInstanceUrl() {
    return this.getStringAttribute('target_instance_url');
  }

  // target_role - computed: true, optional: false, required: false
  public get targetRole() {
    return this.getStringAttribute('target_role');
  }

  // target_service_type - computed: true, optional: false, required: false
  public get targetServiceType() {
    return this.getStringAttribute('target_service_type');
  }
}

export class DataOciOpaOpaInstanceAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpaOpaInstanceAttachmentsOutputReference {
    return new DataOciOpaOpaInstanceAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opa_opa_instance oci_opa_opa_instance}
*/
export class DataOciOpaOpaInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opa_opa_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpaOpaInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpaOpaInstance to import
  * @param importFromId The id of the existing DataOciOpaOpaInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opa_opa_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpaOpaInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opa_opa_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opa_opa_instance oci_opa_opa_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpaOpaInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpaOpaInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opa_opa_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._opaInstanceId = config.opaInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachments - computed: true, optional: false, required: false
  private _attachments = new DataOciOpaOpaInstanceAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // consumption_model - computed: true, optional: false, required: false
  public get consumptionModel() {
    return this.getStringAttribute('consumption_model');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_at - computed: true, optional: false, required: false
  public get idcsAt() {
    return this.getStringAttribute('idcs_at');
  }

  // identity_app_display_name - computed: true, optional: false, required: false
  public get identityAppDisplayName() {
    return this.getStringAttribute('identity_app_display_name');
  }

  // identity_app_guid - computed: true, optional: false, required: false
  public get identityAppGuid() {
    return this.getStringAttribute('identity_app_guid');
  }

  // identity_app_opc_service_instance_guid - computed: true, optional: false, required: false
  public get identityAppOpcServiceInstanceGuid() {
    return this.getStringAttribute('identity_app_opc_service_instance_guid');
  }

  // identity_domain_url - computed: true, optional: false, required: false
  public get identityDomainUrl() {
    return this.getStringAttribute('identity_domain_url');
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // is_breakglass_enabled - computed: true, optional: false, required: false
  public get isBreakglassEnabled() {
    return this.getBooleanAttribute('is_breakglass_enabled');
  }

  // metering_type - computed: true, optional: false, required: false
  public get meteringType() {
    return this.getStringAttribute('metering_type');
  }

  // opa_instance_id - computed: false, optional: false, required: true
  private _opaInstanceId?: string; 
  public get opaInstanceId() {
    return this.getStringAttribute('opa_instance_id');
  }
  public set opaInstanceId(value: string) {
    this._opaInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opaInstanceIdInput() {
    return this._opaInstanceId;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      opa_instance_id: cdktf.stringToTerraform(this._opaInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      opa_instance_id: {
        value: cdktf.stringToHclTerraform(this._opaInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
