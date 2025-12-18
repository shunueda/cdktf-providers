// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}
  */
  readonly licenseAcceptanceStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}
  */
  readonly licenseType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record#timeouts JmsJavaDownloadsJavaLicenseAcceptanceRecord#timeouts}
  */
  readonly timeouts?: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts;
}
export interface JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy {
}

export function jmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByToTerraform(struct?: JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function jmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByToHclTerraform(struct?: JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference {
    return new JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy {
}

export function jmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByToTerraform(struct?: JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function jmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByToHclTerraform(struct?: JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList extends cdktf.ComplexList {

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
  public get(index: number): JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference {
    return new JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record#create JmsJavaDownloadsJavaLicenseAcceptanceRecord#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record#delete JmsJavaDownloadsJavaLicenseAcceptanceRecord#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record#update JmsJavaDownloadsJavaLicenseAcceptanceRecord#update}
  */
  readonly update?: string;
}

export function jmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsToTerraform(struct?: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts | cdktf.IResolvable): any {
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


export function jmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsToHclTerraform(struct?: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts | cdktf.IResolvable): any {
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

export class JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record oci_jms_java_downloads_java_license_acceptance_record}
*/
export class JmsJavaDownloadsJavaLicenseAcceptanceRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_java_downloads_java_license_acceptance_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JmsJavaDownloadsJavaLicenseAcceptanceRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JmsJavaDownloadsJavaLicenseAcceptanceRecord to import
  * @param importFromId The id of the existing JmsJavaDownloadsJavaLicenseAcceptanceRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JmsJavaDownloadsJavaLicenseAcceptanceRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_java_downloads_java_license_acceptance_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/jms_java_downloads_java_license_acceptance_record oci_jms_java_downloads_java_license_acceptance_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig
  */
  public constructor(scope: Construct, id: string, config: JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_java_downloads_java_license_acceptance_record',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._definedTags = config.definedTags;
    this._id = config.id;
    this._licenseAcceptanceStatus = config.licenseAcceptanceStatus;
    this._licenseType = config.licenseType;
    this._timeouts.internalValue = config.timeouts;
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

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
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

  // last_updated_by - computed: true, optional: false, required: false
  private _lastUpdatedBy = new JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList(this, "last_updated_by", false);
  public get lastUpdatedBy() {
    return this._lastUpdatedBy;
  }

  // license_acceptance_status - computed: false, optional: false, required: true
  private _licenseAcceptanceStatus?: string; 
  public get licenseAcceptanceStatus() {
    return this.getStringAttribute('license_acceptance_status');
  }
  public set licenseAcceptanceStatus(value: string) {
    this._licenseAcceptanceStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseAcceptanceStatusInput() {
    return this._licenseAcceptanceStatus;
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
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

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // time_last_updated - computed: true, optional: false, required: false
  public get timeLastUpdated() {
    return this.getStringAttribute('time_last_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      id: cdktf.stringToTerraform(this._id),
      license_acceptance_status: cdktf.stringToTerraform(this._licenseAcceptanceStatus),
      license_type: cdktf.stringToTerraform(this._licenseType),
      timeouts: jmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_acceptance_status: {
        value: cdktf.stringToHclTerraform(this._licenseAcceptanceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: jmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
