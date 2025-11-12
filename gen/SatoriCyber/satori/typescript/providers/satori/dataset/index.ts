// https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#id Dataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDs of security policies to apply to this dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#security_policies Dataset#security_policies}
  */
  readonly securityPolicies?: string[];
  /**
  * access_control_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#access_control_settings Dataset#access_control_settings}
  */
  readonly accessControlSettings: DatasetAccessControlSettings;
  /**
  * custom_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#custom_policy Dataset#custom_policy}
  */
  readonly customPolicy?: DatasetCustomPolicy;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#definition Dataset#definition}
  */
  readonly definition: DatasetDefinition;
}
export interface DatasetAccessControlSettings {
  /**
  * Enforce access control to this dataset. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#enable_access_control Dataset#enable_access_control}
  */
  readonly enableAccessControl?: boolean | cdktf.IResolvable;
  /**
  * Enable users to request access to a dataset without selecting a predefined access rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#enable_custom_access_requests Dataset#enable_custom_access_requests}
  */
  readonly enableCustomAccessRequests?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
}

export function datasetAccessControlSettingsToTerraform(struct?: DatasetAccessControlSettingsOutputReference | DatasetAccessControlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_access_control: cdktf.booleanToTerraform(struct!.enableAccessControl),
    enable_custom_access_requests: cdktf.listMapper(cdktf.booleanToTerraform, false)(struct!.enableCustomAccessRequests),
  }
}


export function datasetAccessControlSettingsToHclTerraform(struct?: DatasetAccessControlSettingsOutputReference | DatasetAccessControlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_access_control: {
      value: cdktf.booleanToHclTerraform(struct!.enableAccessControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_custom_access_requests: {
      value: cdktf.listMapperHcl(cdktf.booleanToHclTerraform, false)(struct!.enableCustomAccessRequests),
      isBlock: false,
      type: "list",
      storageClassType: "booleanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetAccessControlSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetAccessControlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAccessControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAccessControl = this._enableAccessControl;
    }
    if (this._enableCustomAccessRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCustomAccessRequests = this._enableCustomAccessRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetAccessControlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAccessControl = undefined;
      this._enableCustomAccessRequests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAccessControl = value.enableAccessControl;
      this._enableCustomAccessRequests = value.enableCustomAccessRequests;
    }
  }

  // enable_access_control - computed: false, optional: true, required: false
  private _enableAccessControl?: boolean | cdktf.IResolvable; 
  public get enableAccessControl() {
    return this.getBooleanAttribute('enable_access_control');
  }
  public set enableAccessControl(value: boolean | cdktf.IResolvable) {
    this._enableAccessControl = value;
  }
  public resetEnableAccessControl() {
    this._enableAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccessControlInput() {
    return this._enableAccessControl;
  }

  // enable_custom_access_requests - computed: false, optional: true, required: false
  private _enableCustomAccessRequests?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable; 
  public get enableCustomAccessRequests() {
    return this.interpolationForAttribute('enable_custom_access_requests');
  }
  public set enableCustomAccessRequests(value: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable) {
    this._enableCustomAccessRequests = value;
  }
  public resetEnableCustomAccessRequests() {
    this._enableCustomAccessRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomAccessRequestsInput() {
    return this._enableCustomAccessRequests;
  }
}
export interface DatasetCustomPolicy {
  /**
  * Dataset custom policy priority. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#priority Dataset#priority}
  */
  readonly priority?: number;
  /**
  * Custom policy rules YAML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#rules_yaml Dataset#rules_yaml}
  */
  readonly rulesYaml?: string;
  /**
  * Custom policy tags YAML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#tags_yaml Dataset#tags_yaml}
  */
  readonly tagsYaml?: string;
}

export function datasetCustomPolicyToTerraform(struct?: DatasetCustomPolicyOutputReference | DatasetCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    rules_yaml: cdktf.stringToTerraform(struct!.rulesYaml),
    tags_yaml: cdktf.stringToTerraform(struct!.tagsYaml),
  }
}


export function datasetCustomPolicyToHclTerraform(struct?: DatasetCustomPolicyOutputReference | DatasetCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rules_yaml: {
      value: cdktf.stringToHclTerraform(struct!.rulesYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags_yaml: {
      value: cdktf.stringToHclTerraform(struct!.tagsYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetCustomPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rulesYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesYaml = this._rulesYaml;
    }
    if (this._tagsYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsYaml = this._tagsYaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetCustomPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
      this._rulesYaml = undefined;
      this._tagsYaml = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
      this._rulesYaml = value.rulesYaml;
      this._tagsYaml = value.tagsYaml;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rules_yaml - computed: false, optional: true, required: false
  private _rulesYaml?: string; 
  public get rulesYaml() {
    return this.getStringAttribute('rules_yaml');
  }
  public set rulesYaml(value: string) {
    this._rulesYaml = value;
  }
  public resetRulesYaml() {
    this._rulesYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesYamlInput() {
    return this._rulesYaml;
  }

  // tags_yaml - computed: false, optional: true, required: false
  private _tagsYaml?: string; 
  public get tagsYaml() {
    return this.getStringAttribute('tags_yaml');
  }
  public set tagsYaml(value: string) {
    this._tagsYaml = value;
  }
  public resetTagsYaml() {
    this._tagsYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsYamlInput() {
    return this._tagsYaml;
  }
}
export interface DatasetDefinitionApprovers {
  /**
  * The ID of the approver entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#id Dataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Approver type, can be either `GROUP` (IdP Group alone) or `USER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#type Dataset#type}
  */
  readonly type: string;
}

export function datasetDefinitionApproversToTerraform(struct?: DatasetDefinitionApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datasetDefinitionApproversToHclTerraform(struct?: DatasetDefinitionApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DatasetDefinitionApproversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetDefinitionApprovers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionApprovers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DatasetDefinitionApproversList extends cdktf.ComplexList {
  public internalValue? : DatasetDefinitionApprovers[] | cdktf.IResolvable

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
  public get(index: number): DatasetDefinitionApproversOutputReference {
    return new DatasetDefinitionApproversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetDefinitionExcludeLocationLocationAthenaLocation {
  /**
  * Catalog name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#catalog Dataset#catalog}
  */
  readonly catalog: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#db Dataset#db}
  */
  readonly db?: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#table Dataset#table}
  */
  readonly table?: string;
}

export function datasetDefinitionExcludeLocationLocationAthenaLocationToTerraform(struct?: DatasetDefinitionExcludeLocationLocationAthenaLocationOutputReference | DatasetDefinitionExcludeLocationLocationAthenaLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    db: cdktf.stringToTerraform(struct!.db),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function datasetDefinitionExcludeLocationLocationAthenaLocationToHclTerraform(struct?: DatasetDefinitionExcludeLocationLocationAthenaLocationOutputReference | DatasetDefinitionExcludeLocationLocationAthenaLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionExcludeLocationLocationAthenaLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionExcludeLocationLocationAthenaLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionExcludeLocationLocationAthenaLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._db = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._db = value.db;
      this._table = value.table;
    }
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // db - computed: false, optional: true, required: false
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DatasetDefinitionExcludeLocationLocationMongoLocation {
  /**
  * Collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#collection Dataset#collection}
  */
  readonly collection?: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#db Dataset#db}
  */
  readonly db: string;
}

export function datasetDefinitionExcludeLocationLocationMongoLocationToTerraform(struct?: DatasetDefinitionExcludeLocationLocationMongoLocationOutputReference | DatasetDefinitionExcludeLocationLocationMongoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    db: cdktf.stringToTerraform(struct!.db),
  }
}


export function datasetDefinitionExcludeLocationLocationMongoLocationToHclTerraform(struct?: DatasetDefinitionExcludeLocationLocationMongoLocationOutputReference | DatasetDefinitionExcludeLocationLocationMongoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionExcludeLocationLocationMongoLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionExcludeLocationLocationMongoLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionExcludeLocationLocationMongoLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection = undefined;
      this._db = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection = value.collection;
      this._db = value.db;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }
}
export interface DatasetDefinitionExcludeLocationLocationMysqlLocation {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#db Dataset#db}
  */
  readonly db: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#table Dataset#table}
  */
  readonly table?: string;
}

export function datasetDefinitionExcludeLocationLocationMysqlLocationToTerraform(struct?: DatasetDefinitionExcludeLocationLocationMysqlLocationOutputReference | DatasetDefinitionExcludeLocationLocationMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function datasetDefinitionExcludeLocationLocationMysqlLocationToHclTerraform(struct?: DatasetDefinitionExcludeLocationLocationMysqlLocationOutputReference | DatasetDefinitionExcludeLocationLocationMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionExcludeLocationLocationMysqlLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionExcludeLocationLocationMysqlLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionExcludeLocationLocationMysqlLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._db = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._db = value.db;
      this._table = value.table;
    }
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DatasetDefinitionExcludeLocationLocationRelationalLocation {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#db Dataset#db}
  */
  readonly db: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#schema Dataset#schema}
  */
  readonly schema?: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#table Dataset#table}
  */
  readonly table?: string;
}

export function datasetDefinitionExcludeLocationLocationRelationalLocationToTerraform(struct?: DatasetDefinitionExcludeLocationLocationRelationalLocationOutputReference | DatasetDefinitionExcludeLocationLocationRelationalLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function datasetDefinitionExcludeLocationLocationRelationalLocationToHclTerraform(struct?: DatasetDefinitionExcludeLocationLocationRelationalLocationOutputReference | DatasetDefinitionExcludeLocationLocationRelationalLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionExcludeLocationLocationRelationalLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionExcludeLocationLocationRelationalLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionExcludeLocationLocationRelationalLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._db = undefined;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._db = value.db;
      this._schema = value.schema;
      this._table = value.table;
    }
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DatasetDefinitionExcludeLocationLocationS3Location {
  /**
  * Bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#bucket Dataset#bucket}
  */
  readonly bucket: string;
  /**
  * Object Key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#object_key Dataset#object_key}
  */
  readonly objectKey?: string;
}

export function datasetDefinitionExcludeLocationLocationS3LocationToTerraform(struct?: DatasetDefinitionExcludeLocationLocationS3LocationOutputReference | DatasetDefinitionExcludeLocationLocationS3Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object_key: cdktf.stringToTerraform(struct!.objectKey),
  }
}


export function datasetDefinitionExcludeLocationLocationS3LocationToHclTerraform(struct?: DatasetDefinitionExcludeLocationLocationS3LocationOutputReference | DatasetDefinitionExcludeLocationLocationS3Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_key: {
      value: cdktf.stringToHclTerraform(struct!.objectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionExcludeLocationLocationS3LocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionExcludeLocationLocationS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._objectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKey = this._objectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionExcludeLocationLocationS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._objectKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._objectKey = value.objectKey;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object_key - computed: false, optional: true, required: false
  private _objectKey?: string; 
  public get objectKey() {
    return this.getStringAttribute('object_key');
  }
  public set objectKey(value: string) {
    this._objectKey = value;
  }
  public resetObjectKey() {
    this._objectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyInput() {
    return this._objectKey;
  }
}
export interface DatasetDefinitionExcludeLocationLocation {
  /**
  * athena_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#athena_location Dataset#athena_location}
  */
  readonly athenaLocation?: DatasetDefinitionExcludeLocationLocationAthenaLocation;
  /**
  * mongo_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#mongo_location Dataset#mongo_location}
  */
  readonly mongoLocation?: DatasetDefinitionExcludeLocationLocationMongoLocation;
  /**
  * mysql_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#mysql_location Dataset#mysql_location}
  */
  readonly mysqlLocation?: DatasetDefinitionExcludeLocationLocationMysqlLocation;
  /**
  * relational_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#relational_location Dataset#relational_location}
  */
  readonly relationalLocation?: DatasetDefinitionExcludeLocationLocationRelationalLocation;
  /**
  * s3_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#s3_location Dataset#s3_location}
  */
  readonly s3Location?: DatasetDefinitionExcludeLocationLocationS3Location;
}

export function datasetDefinitionExcludeLocationLocationToTerraform(struct?: DatasetDefinitionExcludeLocationLocationOutputReference | DatasetDefinitionExcludeLocationLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    athena_location: datasetDefinitionExcludeLocationLocationAthenaLocationToTerraform(struct!.athenaLocation),
    mongo_location: datasetDefinitionExcludeLocationLocationMongoLocationToTerraform(struct!.mongoLocation),
    mysql_location: datasetDefinitionExcludeLocationLocationMysqlLocationToTerraform(struct!.mysqlLocation),
    relational_location: datasetDefinitionExcludeLocationLocationRelationalLocationToTerraform(struct!.relationalLocation),
    s3_location: datasetDefinitionExcludeLocationLocationS3LocationToTerraform(struct!.s3Location),
  }
}


export function datasetDefinitionExcludeLocationLocationToHclTerraform(struct?: DatasetDefinitionExcludeLocationLocationOutputReference | DatasetDefinitionExcludeLocationLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    athena_location: {
      value: datasetDefinitionExcludeLocationLocationAthenaLocationToHclTerraform(struct!.athenaLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionExcludeLocationLocationAthenaLocationList",
    },
    mongo_location: {
      value: datasetDefinitionExcludeLocationLocationMongoLocationToHclTerraform(struct!.mongoLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionExcludeLocationLocationMongoLocationList",
    },
    mysql_location: {
      value: datasetDefinitionExcludeLocationLocationMysqlLocationToHclTerraform(struct!.mysqlLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionExcludeLocationLocationMysqlLocationList",
    },
    relational_location: {
      value: datasetDefinitionExcludeLocationLocationRelationalLocationToHclTerraform(struct!.relationalLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionExcludeLocationLocationRelationalLocationList",
    },
    s3_location: {
      value: datasetDefinitionExcludeLocationLocationS3LocationToHclTerraform(struct!.s3Location),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionExcludeLocationLocationS3LocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionExcludeLocationLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionExcludeLocationLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._athenaLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaLocation = this._athenaLocation?.internalValue;
    }
    if (this._mongoLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoLocation = this._mongoLocation?.internalValue;
    }
    if (this._mysqlLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlLocation = this._mysqlLocation?.internalValue;
    }
    if (this._relationalLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationalLocation = this._relationalLocation?.internalValue;
    }
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionExcludeLocationLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._athenaLocation.internalValue = undefined;
      this._mongoLocation.internalValue = undefined;
      this._mysqlLocation.internalValue = undefined;
      this._relationalLocation.internalValue = undefined;
      this._s3Location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._athenaLocation.internalValue = value.athenaLocation;
      this._mongoLocation.internalValue = value.mongoLocation;
      this._mysqlLocation.internalValue = value.mysqlLocation;
      this._relationalLocation.internalValue = value.relationalLocation;
      this._s3Location.internalValue = value.s3Location;
    }
  }

  // athena_location - computed: false, optional: true, required: false
  private _athenaLocation = new DatasetDefinitionExcludeLocationLocationAthenaLocationOutputReference(this, "athena_location");
  public get athenaLocation() {
    return this._athenaLocation;
  }
  public putAthenaLocation(value: DatasetDefinitionExcludeLocationLocationAthenaLocation) {
    this._athenaLocation.internalValue = value;
  }
  public resetAthenaLocation() {
    this._athenaLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaLocationInput() {
    return this._athenaLocation.internalValue;
  }

  // mongo_location - computed: false, optional: true, required: false
  private _mongoLocation = new DatasetDefinitionExcludeLocationLocationMongoLocationOutputReference(this, "mongo_location");
  public get mongoLocation() {
    return this._mongoLocation;
  }
  public putMongoLocation(value: DatasetDefinitionExcludeLocationLocationMongoLocation) {
    this._mongoLocation.internalValue = value;
  }
  public resetMongoLocation() {
    this._mongoLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoLocationInput() {
    return this._mongoLocation.internalValue;
  }

  // mysql_location - computed: false, optional: true, required: false
  private _mysqlLocation = new DatasetDefinitionExcludeLocationLocationMysqlLocationOutputReference(this, "mysql_location");
  public get mysqlLocation() {
    return this._mysqlLocation;
  }
  public putMysqlLocation(value: DatasetDefinitionExcludeLocationLocationMysqlLocation) {
    this._mysqlLocation.internalValue = value;
  }
  public resetMysqlLocation() {
    this._mysqlLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlLocationInput() {
    return this._mysqlLocation.internalValue;
  }

  // relational_location - computed: false, optional: true, required: false
  private _relationalLocation = new DatasetDefinitionExcludeLocationLocationRelationalLocationOutputReference(this, "relational_location");
  public get relationalLocation() {
    return this._relationalLocation;
  }
  public putRelationalLocation(value: DatasetDefinitionExcludeLocationLocationRelationalLocation) {
    this._relationalLocation.internalValue = value;
  }
  public resetRelationalLocation() {
    this._relationalLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationalLocationInput() {
    return this._relationalLocation.internalValue;
  }

  // s3_location - computed: false, optional: true, required: false
  private _s3Location = new DatasetDefinitionExcludeLocationLocationS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: DatasetDefinitionExcludeLocationLocationS3Location) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}
export interface DatasetDefinitionExcludeLocationLocationPartsFull {
  /**
  * The name of the location part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
  /**
  * The type of the location part. Optional values: TABLE, COLUMN, SEMANTIC_MODEL, REPORT, DASHBOARD, DATABASE, SCHEMA, JSON_PATH, WAREHOUSE, ENDPOINT, TYPE, FIELD, EXTERNAL_LOCATION, CATALOG, BUCKET, OBJECT, COLLECTION, VIEW, etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#type Dataset#type}
  */
  readonly type: string;
}

export function datasetDefinitionExcludeLocationLocationPartsFullToTerraform(struct?: DatasetDefinitionExcludeLocationLocationPartsFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datasetDefinitionExcludeLocationLocationPartsFullToHclTerraform(struct?: DatasetDefinitionExcludeLocationLocationPartsFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DatasetDefinitionExcludeLocationLocationPartsFullOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetDefinitionExcludeLocationLocationPartsFull | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionExcludeLocationLocationPartsFull | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

export class DatasetDefinitionExcludeLocationLocationPartsFullList extends cdktf.ComplexList {
  public internalValue? : DatasetDefinitionExcludeLocationLocationPartsFull[] | cdktf.IResolvable

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
  public get(index: number): DatasetDefinitionExcludeLocationLocationPartsFullOutputReference {
    return new DatasetDefinitionExcludeLocationLocationPartsFullOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetDefinitionExcludeLocation {
  /**
  * Data store ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#datastore Dataset#datastore}
  */
  readonly datastore: string;
  /**
  * The part separated location path in the data store. Includes an array of path parts when part types are defined with default definitions. For example ['a', 'b', 'c'] in Snowflake data store will path to table 'a' under schema 'b' under database 'a'. Conflicts with 'location', 'location_path', and 'location_parts_full' fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#location_parts Dataset#location_parts}
  */
  readonly locationParts?: string[];
  /**
  * The short presentation of the location path in the data store. Includes `.` separated string when part types are defined with default definitions. For example 'a.b.c' in Snowflake data store will path to table 'a' under schema 'b' under database 'a'.  Conflicts with 'location', 'location_parts', and 'location_parts_full' fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#location_path Dataset#location_path}
  */
  readonly locationPath?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#location Dataset#location}
  */
  readonly location?: DatasetDefinitionExcludeLocationLocation;
  /**
  * location_parts_full block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#location_parts_full Dataset#location_parts_full}
  */
  readonly locationPartsFull?: DatasetDefinitionExcludeLocationLocationPartsFull[] | cdktf.IResolvable;
}

export function datasetDefinitionExcludeLocationToTerraform(struct?: DatasetDefinitionExcludeLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore: cdktf.stringToTerraform(struct!.datastore),
    location_parts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locationParts),
    location_path: cdktf.stringToTerraform(struct!.locationPath),
    location: datasetDefinitionExcludeLocationLocationToTerraform(struct!.location),
    location_parts_full: cdktf.listMapper(datasetDefinitionExcludeLocationLocationPartsFullToTerraform, true)(struct!.locationPartsFull),
  }
}


export function datasetDefinitionExcludeLocationToHclTerraform(struct?: DatasetDefinitionExcludeLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_parts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locationParts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    location_path: {
      value: cdktf.stringToHclTerraform(struct!.locationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: datasetDefinitionExcludeLocationLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionExcludeLocationLocationList",
    },
    location_parts_full: {
      value: cdktf.listMapperHcl(datasetDefinitionExcludeLocationLocationPartsFullToHclTerraform, true)(struct!.locationPartsFull),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionExcludeLocationLocationPartsFullList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionExcludeLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetDefinitionExcludeLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._locationParts !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationParts = this._locationParts;
    }
    if (this._locationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPath = this._locationPath;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._locationPartsFull?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPartsFull = this._locationPartsFull?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionExcludeLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datastore = undefined;
      this._locationParts = undefined;
      this._locationPath = undefined;
      this._location.internalValue = undefined;
      this._locationPartsFull.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datastore = value.datastore;
      this._locationParts = value.locationParts;
      this._locationPath = value.locationPath;
      this._location.internalValue = value.location;
      this._locationPartsFull.internalValue = value.locationPartsFull;
    }
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // location_parts - computed: false, optional: true, required: false
  private _locationParts?: string[]; 
  public get locationParts() {
    return this.getListAttribute('location_parts');
  }
  public set locationParts(value: string[]) {
    this._locationParts = value;
  }
  public resetLocationParts() {
    this._locationParts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPartsInput() {
    return this._locationParts;
  }

  // location_path - computed: false, optional: true, required: false
  private _locationPath?: string; 
  public get locationPath() {
    return this.getStringAttribute('location_path');
  }
  public set locationPath(value: string) {
    this._locationPath = value;
  }
  public resetLocationPath() {
    this._locationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPathInput() {
    return this._locationPath;
  }

  // location - computed: false, optional: true, required: false
  private _location = new DatasetDefinitionExcludeLocationLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DatasetDefinitionExcludeLocationLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // location_parts_full - computed: false, optional: true, required: false
  private _locationPartsFull = new DatasetDefinitionExcludeLocationLocationPartsFullList(this, "location_parts_full", false);
  public get locationPartsFull() {
    return this._locationPartsFull;
  }
  public putLocationPartsFull(value: DatasetDefinitionExcludeLocationLocationPartsFull[] | cdktf.IResolvable) {
    this._locationPartsFull.internalValue = value;
  }
  public resetLocationPartsFull() {
    this._locationPartsFull.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPartsFullInput() {
    return this._locationPartsFull.internalValue;
  }
}

export class DatasetDefinitionExcludeLocationList extends cdktf.ComplexList {
  public internalValue? : DatasetDefinitionExcludeLocation[] | cdktf.IResolvable

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
  public get(index: number): DatasetDefinitionExcludeLocationOutputReference {
    return new DatasetDefinitionExcludeLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetDefinitionIncludeLocationLocationAthenaLocation {
  /**
  * Catalog name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#catalog Dataset#catalog}
  */
  readonly catalog: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#db Dataset#db}
  */
  readonly db?: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#table Dataset#table}
  */
  readonly table?: string;
}

export function datasetDefinitionIncludeLocationLocationAthenaLocationToTerraform(struct?: DatasetDefinitionIncludeLocationLocationAthenaLocationOutputReference | DatasetDefinitionIncludeLocationLocationAthenaLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    db: cdktf.stringToTerraform(struct!.db),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function datasetDefinitionIncludeLocationLocationAthenaLocationToHclTerraform(struct?: DatasetDefinitionIncludeLocationLocationAthenaLocationOutputReference | DatasetDefinitionIncludeLocationLocationAthenaLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionIncludeLocationLocationAthenaLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionIncludeLocationLocationAthenaLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionIncludeLocationLocationAthenaLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._db = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._db = value.db;
      this._table = value.table;
    }
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // db - computed: false, optional: true, required: false
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DatasetDefinitionIncludeLocationLocationMongoLocation {
  /**
  * Collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#collection Dataset#collection}
  */
  readonly collection?: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#db Dataset#db}
  */
  readonly db: string;
}

export function datasetDefinitionIncludeLocationLocationMongoLocationToTerraform(struct?: DatasetDefinitionIncludeLocationLocationMongoLocationOutputReference | DatasetDefinitionIncludeLocationLocationMongoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    db: cdktf.stringToTerraform(struct!.db),
  }
}


export function datasetDefinitionIncludeLocationLocationMongoLocationToHclTerraform(struct?: DatasetDefinitionIncludeLocationLocationMongoLocationOutputReference | DatasetDefinitionIncludeLocationLocationMongoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionIncludeLocationLocationMongoLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionIncludeLocationLocationMongoLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionIncludeLocationLocationMongoLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection = undefined;
      this._db = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection = value.collection;
      this._db = value.db;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }
}
export interface DatasetDefinitionIncludeLocationLocationMysqlLocation {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#db Dataset#db}
  */
  readonly db: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#table Dataset#table}
  */
  readonly table?: string;
}

export function datasetDefinitionIncludeLocationLocationMysqlLocationToTerraform(struct?: DatasetDefinitionIncludeLocationLocationMysqlLocationOutputReference | DatasetDefinitionIncludeLocationLocationMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function datasetDefinitionIncludeLocationLocationMysqlLocationToHclTerraform(struct?: DatasetDefinitionIncludeLocationLocationMysqlLocationOutputReference | DatasetDefinitionIncludeLocationLocationMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionIncludeLocationLocationMysqlLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionIncludeLocationLocationMysqlLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionIncludeLocationLocationMysqlLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._db = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._db = value.db;
      this._table = value.table;
    }
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DatasetDefinitionIncludeLocationLocationRelationalLocation {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#db Dataset#db}
  */
  readonly db: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#schema Dataset#schema}
  */
  readonly schema?: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#table Dataset#table}
  */
  readonly table?: string;
}

export function datasetDefinitionIncludeLocationLocationRelationalLocationToTerraform(struct?: DatasetDefinitionIncludeLocationLocationRelationalLocationOutputReference | DatasetDefinitionIncludeLocationLocationRelationalLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function datasetDefinitionIncludeLocationLocationRelationalLocationToHclTerraform(struct?: DatasetDefinitionIncludeLocationLocationRelationalLocationOutputReference | DatasetDefinitionIncludeLocationLocationRelationalLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionIncludeLocationLocationRelationalLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionIncludeLocationLocationRelationalLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionIncludeLocationLocationRelationalLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._db = undefined;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._db = value.db;
      this._schema = value.schema;
      this._table = value.table;
    }
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DatasetDefinitionIncludeLocationLocationS3Location {
  /**
  * Bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#bucket Dataset#bucket}
  */
  readonly bucket: string;
  /**
  * Object Key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#object_key Dataset#object_key}
  */
  readonly objectKey?: string;
}

export function datasetDefinitionIncludeLocationLocationS3LocationToTerraform(struct?: DatasetDefinitionIncludeLocationLocationS3LocationOutputReference | DatasetDefinitionIncludeLocationLocationS3Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object_key: cdktf.stringToTerraform(struct!.objectKey),
  }
}


export function datasetDefinitionIncludeLocationLocationS3LocationToHclTerraform(struct?: DatasetDefinitionIncludeLocationLocationS3LocationOutputReference | DatasetDefinitionIncludeLocationLocationS3Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_key: {
      value: cdktf.stringToHclTerraform(struct!.objectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionIncludeLocationLocationS3LocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionIncludeLocationLocationS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._objectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKey = this._objectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionIncludeLocationLocationS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._objectKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._objectKey = value.objectKey;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object_key - computed: false, optional: true, required: false
  private _objectKey?: string; 
  public get objectKey() {
    return this.getStringAttribute('object_key');
  }
  public set objectKey(value: string) {
    this._objectKey = value;
  }
  public resetObjectKey() {
    this._objectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyInput() {
    return this._objectKey;
  }
}
export interface DatasetDefinitionIncludeLocationLocation {
  /**
  * athena_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#athena_location Dataset#athena_location}
  */
  readonly athenaLocation?: DatasetDefinitionIncludeLocationLocationAthenaLocation;
  /**
  * mongo_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#mongo_location Dataset#mongo_location}
  */
  readonly mongoLocation?: DatasetDefinitionIncludeLocationLocationMongoLocation;
  /**
  * mysql_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#mysql_location Dataset#mysql_location}
  */
  readonly mysqlLocation?: DatasetDefinitionIncludeLocationLocationMysqlLocation;
  /**
  * relational_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#relational_location Dataset#relational_location}
  */
  readonly relationalLocation?: DatasetDefinitionIncludeLocationLocationRelationalLocation;
  /**
  * s3_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#s3_location Dataset#s3_location}
  */
  readonly s3Location?: DatasetDefinitionIncludeLocationLocationS3Location;
}

export function datasetDefinitionIncludeLocationLocationToTerraform(struct?: DatasetDefinitionIncludeLocationLocationOutputReference | DatasetDefinitionIncludeLocationLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    athena_location: datasetDefinitionIncludeLocationLocationAthenaLocationToTerraform(struct!.athenaLocation),
    mongo_location: datasetDefinitionIncludeLocationLocationMongoLocationToTerraform(struct!.mongoLocation),
    mysql_location: datasetDefinitionIncludeLocationLocationMysqlLocationToTerraform(struct!.mysqlLocation),
    relational_location: datasetDefinitionIncludeLocationLocationRelationalLocationToTerraform(struct!.relationalLocation),
    s3_location: datasetDefinitionIncludeLocationLocationS3LocationToTerraform(struct!.s3Location),
  }
}


export function datasetDefinitionIncludeLocationLocationToHclTerraform(struct?: DatasetDefinitionIncludeLocationLocationOutputReference | DatasetDefinitionIncludeLocationLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    athena_location: {
      value: datasetDefinitionIncludeLocationLocationAthenaLocationToHclTerraform(struct!.athenaLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionIncludeLocationLocationAthenaLocationList",
    },
    mongo_location: {
      value: datasetDefinitionIncludeLocationLocationMongoLocationToHclTerraform(struct!.mongoLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionIncludeLocationLocationMongoLocationList",
    },
    mysql_location: {
      value: datasetDefinitionIncludeLocationLocationMysqlLocationToHclTerraform(struct!.mysqlLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionIncludeLocationLocationMysqlLocationList",
    },
    relational_location: {
      value: datasetDefinitionIncludeLocationLocationRelationalLocationToHclTerraform(struct!.relationalLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionIncludeLocationLocationRelationalLocationList",
    },
    s3_location: {
      value: datasetDefinitionIncludeLocationLocationS3LocationToHclTerraform(struct!.s3Location),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionIncludeLocationLocationS3LocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionIncludeLocationLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinitionIncludeLocationLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._athenaLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaLocation = this._athenaLocation?.internalValue;
    }
    if (this._mongoLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoLocation = this._mongoLocation?.internalValue;
    }
    if (this._mysqlLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlLocation = this._mysqlLocation?.internalValue;
    }
    if (this._relationalLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationalLocation = this._relationalLocation?.internalValue;
    }
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionIncludeLocationLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._athenaLocation.internalValue = undefined;
      this._mongoLocation.internalValue = undefined;
      this._mysqlLocation.internalValue = undefined;
      this._relationalLocation.internalValue = undefined;
      this._s3Location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._athenaLocation.internalValue = value.athenaLocation;
      this._mongoLocation.internalValue = value.mongoLocation;
      this._mysqlLocation.internalValue = value.mysqlLocation;
      this._relationalLocation.internalValue = value.relationalLocation;
      this._s3Location.internalValue = value.s3Location;
    }
  }

  // athena_location - computed: false, optional: true, required: false
  private _athenaLocation = new DatasetDefinitionIncludeLocationLocationAthenaLocationOutputReference(this, "athena_location");
  public get athenaLocation() {
    return this._athenaLocation;
  }
  public putAthenaLocation(value: DatasetDefinitionIncludeLocationLocationAthenaLocation) {
    this._athenaLocation.internalValue = value;
  }
  public resetAthenaLocation() {
    this._athenaLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaLocationInput() {
    return this._athenaLocation.internalValue;
  }

  // mongo_location - computed: false, optional: true, required: false
  private _mongoLocation = new DatasetDefinitionIncludeLocationLocationMongoLocationOutputReference(this, "mongo_location");
  public get mongoLocation() {
    return this._mongoLocation;
  }
  public putMongoLocation(value: DatasetDefinitionIncludeLocationLocationMongoLocation) {
    this._mongoLocation.internalValue = value;
  }
  public resetMongoLocation() {
    this._mongoLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoLocationInput() {
    return this._mongoLocation.internalValue;
  }

  // mysql_location - computed: false, optional: true, required: false
  private _mysqlLocation = new DatasetDefinitionIncludeLocationLocationMysqlLocationOutputReference(this, "mysql_location");
  public get mysqlLocation() {
    return this._mysqlLocation;
  }
  public putMysqlLocation(value: DatasetDefinitionIncludeLocationLocationMysqlLocation) {
    this._mysqlLocation.internalValue = value;
  }
  public resetMysqlLocation() {
    this._mysqlLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlLocationInput() {
    return this._mysqlLocation.internalValue;
  }

  // relational_location - computed: false, optional: true, required: false
  private _relationalLocation = new DatasetDefinitionIncludeLocationLocationRelationalLocationOutputReference(this, "relational_location");
  public get relationalLocation() {
    return this._relationalLocation;
  }
  public putRelationalLocation(value: DatasetDefinitionIncludeLocationLocationRelationalLocation) {
    this._relationalLocation.internalValue = value;
  }
  public resetRelationalLocation() {
    this._relationalLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationalLocationInput() {
    return this._relationalLocation.internalValue;
  }

  // s3_location - computed: false, optional: true, required: false
  private _s3Location = new DatasetDefinitionIncludeLocationLocationS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: DatasetDefinitionIncludeLocationLocationS3Location) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}
export interface DatasetDefinitionIncludeLocationLocationPartsFull {
  /**
  * The name of the location part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
  /**
  * The type of the location part. Optional values: TABLE, COLUMN, SEMANTIC_MODEL, REPORT, DASHBOARD, DATABASE, SCHEMA, JSON_PATH, WAREHOUSE, ENDPOINT, TYPE, FIELD, EXTERNAL_LOCATION, CATALOG, BUCKET, OBJECT, COLLECTION, VIEW, etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#type Dataset#type}
  */
  readonly type: string;
}

export function datasetDefinitionIncludeLocationLocationPartsFullToTerraform(struct?: DatasetDefinitionIncludeLocationLocationPartsFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datasetDefinitionIncludeLocationLocationPartsFullToHclTerraform(struct?: DatasetDefinitionIncludeLocationLocationPartsFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DatasetDefinitionIncludeLocationLocationPartsFullOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetDefinitionIncludeLocationLocationPartsFull | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionIncludeLocationLocationPartsFull | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

export class DatasetDefinitionIncludeLocationLocationPartsFullList extends cdktf.ComplexList {
  public internalValue? : DatasetDefinitionIncludeLocationLocationPartsFull[] | cdktf.IResolvable

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
  public get(index: number): DatasetDefinitionIncludeLocationLocationPartsFullOutputReference {
    return new DatasetDefinitionIncludeLocationLocationPartsFullOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetDefinitionIncludeLocation {
  /**
  * Data store ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#datastore Dataset#datastore}
  */
  readonly datastore: string;
  /**
  * The part separated location path in the data store. Includes an array of path parts when part types are defined with default definitions. For example ['a', 'b', 'c'] in Snowflake data store will path to table 'a' under schema 'b' under database 'a'. Conflicts with 'location', 'location_path', and 'location_parts_full' fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#location_parts Dataset#location_parts}
  */
  readonly locationParts?: string[];
  /**
  * The short presentation of the location path in the data store. Includes `.` separated string when part types are defined with default definitions. For example 'a.b.c' in Snowflake data store will path to table 'a' under schema 'b' under database 'a'.  Conflicts with 'location', 'location_parts', and 'location_parts_full' fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#location_path Dataset#location_path}
  */
  readonly locationPath?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#location Dataset#location}
  */
  readonly location?: DatasetDefinitionIncludeLocationLocation;
  /**
  * location_parts_full block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#location_parts_full Dataset#location_parts_full}
  */
  readonly locationPartsFull?: DatasetDefinitionIncludeLocationLocationPartsFull[] | cdktf.IResolvable;
}

export function datasetDefinitionIncludeLocationToTerraform(struct?: DatasetDefinitionIncludeLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore: cdktf.stringToTerraform(struct!.datastore),
    location_parts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locationParts),
    location_path: cdktf.stringToTerraform(struct!.locationPath),
    location: datasetDefinitionIncludeLocationLocationToTerraform(struct!.location),
    location_parts_full: cdktf.listMapper(datasetDefinitionIncludeLocationLocationPartsFullToTerraform, true)(struct!.locationPartsFull),
  }
}


export function datasetDefinitionIncludeLocationToHclTerraform(struct?: DatasetDefinitionIncludeLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_parts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locationParts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    location_path: {
      value: cdktf.stringToHclTerraform(struct!.locationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: datasetDefinitionIncludeLocationLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionIncludeLocationLocationList",
    },
    location_parts_full: {
      value: cdktf.listMapperHcl(datasetDefinitionIncludeLocationLocationPartsFullToHclTerraform, true)(struct!.locationPartsFull),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionIncludeLocationLocationPartsFullList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionIncludeLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetDefinitionIncludeLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._locationParts !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationParts = this._locationParts;
    }
    if (this._locationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPath = this._locationPath;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._locationPartsFull?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPartsFull = this._locationPartsFull?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinitionIncludeLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datastore = undefined;
      this._locationParts = undefined;
      this._locationPath = undefined;
      this._location.internalValue = undefined;
      this._locationPartsFull.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datastore = value.datastore;
      this._locationParts = value.locationParts;
      this._locationPath = value.locationPath;
      this._location.internalValue = value.location;
      this._locationPartsFull.internalValue = value.locationPartsFull;
    }
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // location_parts - computed: false, optional: true, required: false
  private _locationParts?: string[]; 
  public get locationParts() {
    return this.getListAttribute('location_parts');
  }
  public set locationParts(value: string[]) {
    this._locationParts = value;
  }
  public resetLocationParts() {
    this._locationParts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPartsInput() {
    return this._locationParts;
  }

  // location_path - computed: false, optional: true, required: false
  private _locationPath?: string; 
  public get locationPath() {
    return this.getStringAttribute('location_path');
  }
  public set locationPath(value: string) {
    this._locationPath = value;
  }
  public resetLocationPath() {
    this._locationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPathInput() {
    return this._locationPath;
  }

  // location - computed: false, optional: true, required: false
  private _location = new DatasetDefinitionIncludeLocationLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DatasetDefinitionIncludeLocationLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // location_parts_full - computed: false, optional: true, required: false
  private _locationPartsFull = new DatasetDefinitionIncludeLocationLocationPartsFullList(this, "location_parts_full", false);
  public get locationPartsFull() {
    return this._locationPartsFull;
  }
  public putLocationPartsFull(value: DatasetDefinitionIncludeLocationLocationPartsFull[] | cdktf.IResolvable) {
    this._locationPartsFull.internalValue = value;
  }
  public resetLocationPartsFull() {
    this._locationPartsFull.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPartsFullInput() {
    return this._locationPartsFull.internalValue;
  }
}

export class DatasetDefinitionIncludeLocationList extends cdktf.ComplexList {
  public internalValue? : DatasetDefinitionIncludeLocation[] | cdktf.IResolvable

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
  public get(index: number): DatasetDefinitionIncludeLocationOutputReference {
    return new DatasetDefinitionIncludeLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetDefinition {
  /**
  * Dataset description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#description Dataset#description}
  */
  readonly description?: string;
  /**
  * Dataset name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
  /**
  * IDs of Satori users that will be set as dataset owners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#owners Dataset#owners}
  */
  readonly owners?: string[];
  /**
  * approvers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#approvers Dataset#approvers}
  */
  readonly approvers?: DatasetDefinitionApprovers[] | cdktf.IResolvable;
  /**
  * exclude_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#exclude_location Dataset#exclude_location}
  */
  readonly excludeLocation?: DatasetDefinitionExcludeLocation[] | cdktf.IResolvable;
  /**
  * include_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#include_location Dataset#include_location}
  */
  readonly includeLocation?: DatasetDefinitionIncludeLocation[] | cdktf.IResolvable;
}

export function datasetDefinitionToTerraform(struct?: DatasetDefinitionOutputReference | DatasetDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    owners: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.owners),
    approvers: cdktf.listMapper(datasetDefinitionApproversToTerraform, true)(struct!.approvers),
    exclude_location: cdktf.listMapper(datasetDefinitionExcludeLocationToTerraform, true)(struct!.excludeLocation),
    include_location: cdktf.listMapper(datasetDefinitionIncludeLocationToTerraform, true)(struct!.includeLocation),
  }
}


export function datasetDefinitionToHclTerraform(struct?: DatasetDefinitionOutputReference | DatasetDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owners: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.owners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    approvers: {
      value: cdktf.listMapperHcl(datasetDefinitionApproversToHclTerraform, true)(struct!.approvers),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionApproversList",
    },
    exclude_location: {
      value: cdktf.listMapperHcl(datasetDefinitionExcludeLocationToHclTerraform, true)(struct!.excludeLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionExcludeLocationList",
    },
    include_location: {
      value: cdktf.listMapperHcl(datasetDefinitionIncludeLocationToHclTerraform, true)(struct!.includeLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetDefinitionIncludeLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owners !== undefined) {
      hasAnyValues = true;
      internalValueResult.owners = this._owners;
    }
    if (this._approvers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvers = this._approvers?.internalValue;
    }
    if (this._excludeLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeLocation = this._excludeLocation?.internalValue;
    }
    if (this._includeLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLocation = this._includeLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._owners = undefined;
      this._approvers.internalValue = undefined;
      this._excludeLocation.internalValue = undefined;
      this._includeLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._owners = value.owners;
      this._approvers.internalValue = value.approvers;
      this._excludeLocation.internalValue = value.excludeLocation;
      this._includeLocation.internalValue = value.includeLocation;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // approvers - computed: false, optional: true, required: false
  private _approvers = new DatasetDefinitionApproversList(this, "approvers", false);
  public get approvers() {
    return this._approvers;
  }
  public putApprovers(value: DatasetDefinitionApprovers[] | cdktf.IResolvable) {
    this._approvers.internalValue = value;
  }
  public resetApprovers() {
    this._approvers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approversInput() {
    return this._approvers.internalValue;
  }

  // exclude_location - computed: false, optional: true, required: false
  private _excludeLocation = new DatasetDefinitionExcludeLocationList(this, "exclude_location", false);
  public get excludeLocation() {
    return this._excludeLocation;
  }
  public putExcludeLocation(value: DatasetDefinitionExcludeLocation[] | cdktf.IResolvable) {
    this._excludeLocation.internalValue = value;
  }
  public resetExcludeLocation() {
    this._excludeLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeLocationInput() {
    return this._excludeLocation.internalValue;
  }

  // include_location - computed: false, optional: true, required: false
  private _includeLocation = new DatasetDefinitionIncludeLocationList(this, "include_location", false);
  public get includeLocation() {
    return this._includeLocation;
  }
  public putIncludeLocation(value: DatasetDefinitionIncludeLocation[] | cdktf.IResolvable) {
    this._includeLocation.internalValue = value;
  }
  public resetIncludeLocation() {
    this._includeLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLocationInput() {
    return this._includeLocation.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset satori_dataset}
*/
export class Dataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "satori_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dataset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dataset to import
  * @param importFromId The id of the existing Dataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "satori_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/dataset satori_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'satori_dataset',
      terraformGeneratorMetadata: {
        providerName: 'satori',
        providerVersion: '0.2.8',
        providerVersionConstraint: '0.2.8'
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
    this._securityPolicies = config.securityPolicies;
    this._accessControlSettings.internalValue = config.accessControlSettings;
    this._customPolicy.internalValue = config.customPolicy;
    this._definition.internalValue = config.definition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_policy_id - computed: true, optional: false, required: false
  public get dataPolicyId() {
    return this.getStringAttribute('data_policy_id');
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

  // security_policies - computed: false, optional: true, required: false
  private _securityPolicies?: string[]; 
  public get securityPolicies() {
    return this.getListAttribute('security_policies');
  }
  public set securityPolicies(value: string[]) {
    this._securityPolicies = value;
  }
  public resetSecurityPolicies() {
    this._securityPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPoliciesInput() {
    return this._securityPolicies;
  }

  // access_control_settings - computed: false, optional: false, required: true
  private _accessControlSettings = new DatasetAccessControlSettingsOutputReference(this, "access_control_settings");
  public get accessControlSettings() {
    return this._accessControlSettings;
  }
  public putAccessControlSettings(value: DatasetAccessControlSettings) {
    this._accessControlSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlSettingsInput() {
    return this._accessControlSettings.internalValue;
  }

  // custom_policy - computed: false, optional: true, required: false
  private _customPolicy = new DatasetCustomPolicyOutputReference(this, "custom_policy");
  public get customPolicy() {
    return this._customPolicy;
  }
  public putCustomPolicy(value: DatasetCustomPolicy) {
    this._customPolicy.internalValue = value;
  }
  public resetCustomPolicy() {
    this._customPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPolicyInput() {
    return this._customPolicy.internalValue;
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new DatasetDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DatasetDefinition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      security_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityPolicies),
      access_control_settings: datasetAccessControlSettingsToTerraform(this._accessControlSettings.internalValue),
      custom_policy: datasetCustomPolicyToTerraform(this._customPolicy.internalValue),
      definition: datasetDefinitionToTerraform(this._definition.internalValue),
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
      security_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      access_control_settings: {
        value: datasetAccessControlSettingsToHclTerraform(this._accessControlSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasetAccessControlSettingsList",
      },
      custom_policy: {
        value: datasetCustomPolicyToHclTerraform(this._customPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasetCustomPolicyList",
      },
      definition: {
        value: datasetDefinitionToHclTerraform(this._definition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasetDefinitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
