// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexResourceCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#filter DataPowerflexResourceCredential#filter}
  */
  readonly filter?: DataPowerflexResourceCredentialFilter;
}
export interface DataPowerflexResourceCredentialResourceCredentialDetails {
}

export function dataPowerflexResourceCredentialResourceCredentialDetailsToTerraform(struct?: DataPowerflexResourceCredentialResourceCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceCredentialResourceCredentialDetailsToHclTerraform(struct?: DataPowerflexResourceCredentialResourceCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceCredentialResourceCredentialDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceCredentialResourceCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceCredentialResourceCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataPowerflexResourceCredentialResourceCredentialDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceCredentialResourceCredentialDetailsOutputReference {
    return new DataPowerflexResourceCredentialResourceCredentialDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceCredentialFilter {
  /**
  * List of created_by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#created_by DataPowerflexResourceCredential#created_by}
  */
  readonly createdBy?: string[];
  /**
  * List of created_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#created_date DataPowerflexResourceCredential#created_date}
  */
  readonly createdDate?: string[];
  /**
  * List of domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#domain DataPowerflexResourceCredential#domain}
  */
  readonly domain?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#id DataPowerflexResourceCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#label DataPowerflexResourceCredential#label}
  */
  readonly label?: string[];
  /**
  * List of type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#type DataPowerflexResourceCredential#type}
  */
  readonly type?: string[];
  /**
  * List of updated_by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#updated_by DataPowerflexResourceCredential#updated_by}
  */
  readonly updatedBy?: string[];
  /**
  * List of updated_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#updated_date DataPowerflexResourceCredential#updated_date}
  */
  readonly updatedDate?: string[];
  /**
  * List of username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#username DataPowerflexResourceCredential#username}
  */
  readonly username?: string[];
}

export function dataPowerflexResourceCredentialFilterToTerraform(struct?: DataPowerflexResourceCredentialFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.createdBy),
    created_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.createdDate),
    domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domain),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    label: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.label),
    type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.type),
    updated_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updatedBy),
    updated_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updatedDate),
    username: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.username),
  }
}


export function dataPowerflexResourceCredentialFilterToHclTerraform(struct?: DataPowerflexResourceCredentialFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.createdBy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    created_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.createdDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domain),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    label: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.label),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.type),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    updated_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.updatedBy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    updated_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.updatedDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.username),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexResourceCredentialFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceCredentialFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._createdDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdDate = this._createdDate;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    if (this._updatedDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedDate = this._updatedDate;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceCredentialFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._createdDate = undefined;
      this._domain = undefined;
      this._id = undefined;
      this._label = undefined;
      this._type = undefined;
      this._updatedBy = undefined;
      this._updatedDate = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._createdDate = value.createdDate;
      this._domain = value.domain;
      this._id = value.id;
      this._label = value.label;
      this._type = value.type;
      this._updatedBy = value.updatedBy;
      this._updatedDate = value.updatedDate;
      this._username = value.username;
    }
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string[]; 
  public get createdBy() {
    return cdktf.Fn.tolist(this.getListAttribute('created_by'));
  }
  public set createdBy(value: string[]) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // created_date - computed: false, optional: true, required: false
  private _createdDate?: string[]; 
  public get createdDate() {
    return cdktf.Fn.tolist(this.getListAttribute('created_date'));
  }
  public set createdDate(value: string[]) {
    this._createdDate = value;
  }
  public resetCreatedDate() {
    this._createdDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdDateInput() {
    return this._createdDate;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string[]; 
  public get domain() {
    return cdktf.Fn.tolist(this.getListAttribute('domain'));
  }
  public set domain(value: string[]) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string[]; 
  public get label() {
    return cdktf.Fn.tolist(this.getListAttribute('label'));
  }
  public set label(value: string[]) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return cdktf.Fn.tolist(this.getListAttribute('type'));
  }
  public set type(value: string[]) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_by - computed: false, optional: true, required: false
  private _updatedBy?: string[]; 
  public get updatedBy() {
    return cdktf.Fn.tolist(this.getListAttribute('updated_by'));
  }
  public set updatedBy(value: string[]) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // updated_date - computed: false, optional: true, required: false
  private _updatedDate?: string[]; 
  public get updatedDate() {
    return cdktf.Fn.tolist(this.getListAttribute('updated_date'));
  }
  public set updatedDate(value: string[]) {
    this._updatedDate = value;
  }
  public resetUpdatedDate() {
    this._updatedDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedDateInput() {
    return this._updatedDate;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string[]; 
  public get username() {
    return cdktf.Fn.tolist(this.getListAttribute('username'));
  }
  public set username(value: string[]) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential powerflex_resource_credential}
*/
export class DataPowerflexResourceCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_resource_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexResourceCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexResourceCredential to import
  * @param importFromId The id of the existing DataPowerflexResourceCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexResourceCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_resource_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_credential powerflex_resource_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexResourceCredentialConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexResourceCredentialConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_resource_credential',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_credential_details - computed: true, optional: false, required: false
  private _resourceCredentialDetails = new DataPowerflexResourceCredentialResourceCredentialDetailsList(this, "resource_credential_details", false);
  public get resourceCredentialDetails() {
    return this._resourceCredentialDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexResourceCredentialFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexResourceCredentialFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerflexResourceCredentialFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexResourceCredentialFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexResourceCredentialFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
