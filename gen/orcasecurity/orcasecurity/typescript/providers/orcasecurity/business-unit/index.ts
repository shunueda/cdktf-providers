// https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The filter to select the resources of the business unit. If you are creating a BU that only includes Shift Left resources (projects), this can be safely excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#filter_data BusinessUnit#filter_data}
  */
  readonly filterData?: BusinessUnitFilterData;
  /**
  * Whether or not this is a business unit all users within your Orca org can use. If set to true, then it is accessible to all other users in your org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#global_filter BusinessUnit#global_filter}
  */
  readonly globalFilter?: boolean | cdktf.IResolvable;
  /**
  * Business Unit name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#name BusinessUnit#name}
  */
  readonly name: string;
  /**
  * The filter to select Shift Left resources for the business unit. If you are creating a BU that only includes Shift Left resources (projects), this can be safely excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#shiftleft_filter_data BusinessUnit#shiftleft_filter_data}
  */
  readonly shiftleftFilterData?: BusinessUnitShiftleftFilterData;
}
export interface BusinessUnitFilterData {
  /**
  * A list of 1 or more cloud account IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#cloud_account_ids BusinessUnit#cloud_account_ids}
  */
  readonly cloudAccountIds?: string[];
  /**
  * A list of 1 or more cloud account tags. The key and value should be separated by a vertical line (|), rather than a colon(:).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#cloud_account_tags BusinessUnit#cloud_account_tags}
  */
  readonly cloudAccountTags?: string[];
  /**
  * A list of 1 or more cloud providers. Valid values are `alicloud`, `aws`, `azure`, `gcp`, `oci`, and `shiftleft`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#cloud_providers BusinessUnit#cloud_providers}
  */
  readonly cloudProviders?: string[];
  /**
  * A list of 1 or more cloud tags (for AWS and Azure) or labels (for GCP). The key and value should be separated by a vertical line (|), rather than a colon(:).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#cloud_tags BusinessUnit#cloud_tags}
  */
  readonly cloudTags?: string[];
  /**
  * A list of 1 or more custom tags. The key and value should be separated by a vertical line (|), rather than a colon(:).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#custom_tags BusinessUnit#custom_tags}
  */
  readonly customTags?: string[];
}

export function businessUnitFilterDataToTerraform(struct?: BusinessUnitFilterData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudAccountIds),
    cloud_account_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudAccountTags),
    cloud_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudProviders),
    cloud_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudTags),
    custom_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customTags),
  }
}


export function businessUnitFilterDataToHclTerraform(struct?: BusinessUnitFilterData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudAccountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cloud_account_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudAccountTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cloud_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cloud_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessUnitFilterDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BusinessUnitFilterData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccountIds = this._cloudAccountIds;
    }
    if (this._cloudAccountTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccountTags = this._cloudAccountTags;
    }
    if (this._cloudProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviders = this._cloudProviders;
    }
    if (this._cloudTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudTags = this._cloudTags;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessUnitFilterData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudAccountIds = undefined;
      this._cloudAccountTags = undefined;
      this._cloudProviders = undefined;
      this._cloudTags = undefined;
      this._customTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudAccountIds = value.cloudAccountIds;
      this._cloudAccountTags = value.cloudAccountTags;
      this._cloudProviders = value.cloudProviders;
      this._cloudTags = value.cloudTags;
      this._customTags = value.customTags;
    }
  }

  // cloud_account_ids - computed: false, optional: true, required: false
  private _cloudAccountIds?: string[]; 
  public get cloudAccountIds() {
    return this.getListAttribute('cloud_account_ids');
  }
  public set cloudAccountIds(value: string[]) {
    this._cloudAccountIds = value;
  }
  public resetCloudAccountIds() {
    this._cloudAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdsInput() {
    return this._cloudAccountIds;
  }

  // cloud_account_tags - computed: false, optional: true, required: false
  private _cloudAccountTags?: string[]; 
  public get cloudAccountTags() {
    return this.getListAttribute('cloud_account_tags');
  }
  public set cloudAccountTags(value: string[]) {
    this._cloudAccountTags = value;
  }
  public resetCloudAccountTags() {
    this._cloudAccountTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountTagsInput() {
    return this._cloudAccountTags;
  }

  // cloud_providers - computed: false, optional: true, required: false
  private _cloudProviders?: string[]; 
  public get cloudProviders() {
    return this.getListAttribute('cloud_providers');
  }
  public set cloudProviders(value: string[]) {
    this._cloudProviders = value;
  }
  public resetCloudProviders() {
    this._cloudProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProvidersInput() {
    return this._cloudProviders;
  }

  // cloud_tags - computed: false, optional: true, required: false
  private _cloudTags?: string[]; 
  public get cloudTags() {
    return this.getListAttribute('cloud_tags');
  }
  public set cloudTags(value: string[]) {
    this._cloudTags = value;
  }
  public resetCloudTags() {
    this._cloudTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTagsInput() {
    return this._cloudTags;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: string[]; 
  public get customTags() {
    return this.getListAttribute('custom_tags');
  }
  public set customTags(value: string[]) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }
}
export interface BusinessUnitShiftleftFilterData {
  /**
  * A list of 1 or more Shift Left project IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#shiftleft_project_ids BusinessUnit#shiftleft_project_ids}
  */
  readonly shiftleftProjectIds?: string[];
}

export function businessUnitShiftleftFilterDataToTerraform(struct?: BusinessUnitShiftleftFilterData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shiftleft_project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shiftleftProjectIds),
  }
}


export function businessUnitShiftleftFilterDataToHclTerraform(struct?: BusinessUnitShiftleftFilterData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shiftleft_project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shiftleftProjectIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessUnitShiftleftFilterDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BusinessUnitShiftleftFilterData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shiftleftProjectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.shiftleftProjectIds = this._shiftleftProjectIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessUnitShiftleftFilterData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shiftleftProjectIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shiftleftProjectIds = value.shiftleftProjectIds;
    }
  }

  // shiftleft_project_ids - computed: false, optional: true, required: false
  private _shiftleftProjectIds?: string[]; 
  public get shiftleftProjectIds() {
    return this.getListAttribute('shiftleft_project_ids');
  }
  public set shiftleftProjectIds(value: string[]) {
    this._shiftleftProjectIds = value;
  }
  public resetShiftleftProjectIds() {
    this._shiftleftProjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftleftProjectIdsInput() {
    return this._shiftleftProjectIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit orcasecurity_business_unit}
*/
export class BusinessUnit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "orcasecurity_business_unit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BusinessUnit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BusinessUnit to import
  * @param importFromId The id of the existing BusinessUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BusinessUnit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "orcasecurity_business_unit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/business_unit orcasecurity_business_unit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessUnitConfig
  */
  public constructor(scope: Construct, id: string, config: BusinessUnitConfig) {
    super(scope, id, {
      terraformResourceType: 'orcasecurity_business_unit',
      terraformGeneratorMetadata: {
        providerName: 'orcasecurity',
        providerVersion: '0.0.23',
        providerVersionConstraint: '0.0.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterData.internalValue = config.filterData;
    this._globalFilter = config.globalFilter;
    this._name = config.name;
    this._shiftleftFilterData.internalValue = config.shiftleftFilterData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_data - computed: false, optional: true, required: false
  private _filterData = new BusinessUnitFilterDataOutputReference(this, "filter_data");
  public get filterData() {
    return this._filterData;
  }
  public putFilterData(value: BusinessUnitFilterData) {
    this._filterData.internalValue = value;
  }
  public resetFilterData() {
    this._filterData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDataInput() {
    return this._filterData.internalValue;
  }

  // global_filter - computed: false, optional: true, required: false
  private _globalFilter?: boolean | cdktf.IResolvable; 
  public get globalFilter() {
    return this.getBooleanAttribute('global_filter');
  }
  public set globalFilter(value: boolean | cdktf.IResolvable) {
    this._globalFilter = value;
  }
  public resetGlobalFilter() {
    this._globalFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalFilterInput() {
    return this._globalFilter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // shiftleft_filter_data - computed: false, optional: true, required: false
  private _shiftleftFilterData = new BusinessUnitShiftleftFilterDataOutputReference(this, "shiftleft_filter_data");
  public get shiftleftFilterData() {
    return this._shiftleftFilterData;
  }
  public putShiftleftFilterData(value: BusinessUnitShiftleftFilterData) {
    this._shiftleftFilterData.internalValue = value;
  }
  public resetShiftleftFilterData() {
    this._shiftleftFilterData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftleftFilterDataInput() {
    return this._shiftleftFilterData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_data: businessUnitFilterDataToTerraform(this._filterData.internalValue),
      global_filter: cdktf.booleanToTerraform(this._globalFilter),
      name: cdktf.stringToTerraform(this._name),
      shiftleft_filter_data: businessUnitShiftleftFilterDataToTerraform(this._shiftleftFilterData.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_data: {
        value: businessUnitFilterDataToHclTerraform(this._filterData.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BusinessUnitFilterData",
      },
      global_filter: {
        value: cdktf.booleanToHclTerraform(this._globalFilter),
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
      shiftleft_filter_data: {
        value: businessUnitShiftleftFilterDataToHclTerraform(this._shiftleftFilterData.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BusinessUnitShiftleftFilterData",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
