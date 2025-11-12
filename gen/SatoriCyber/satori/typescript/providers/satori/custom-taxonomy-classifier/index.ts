// https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomTaxonomyClassifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of additional Satori taxonomy category IDs.
  * See https://satoricyber.com/docs/taxonomy/standard-categories for a list of possible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#additional_satori_categories CustomTaxonomyClassifier#additional_satori_categories}
  */
  readonly additionalSatoriCategories?: string[];
  /**
  * Classifier description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#description CustomTaxonomyClassifier#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#id CustomTaxonomyClassifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Classifier name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#name CustomTaxonomyClassifier#name}
  */
  readonly name: string;
  /**
  * Parent category ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#parent_category CustomTaxonomyClassifier#parent_category}
  */
  readonly parentCategory?: string;
  /**
  * Classifier type, valid types are: NON_AUTOMATIC, CUSTOM, SATORI_BASED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#type CustomTaxonomyClassifier#type}
  */
  readonly type: string;
  /**
  * custom_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#custom_config CustomTaxonomyClassifier#custom_config}
  */
  readonly customConfig?: CustomTaxonomyClassifierCustomConfig;
  /**
  * satori_based_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#satori_based_config CustomTaxonomyClassifier#satori_based_config}
  */
  readonly satoriBasedConfig?: CustomTaxonomyClassifierSatoriBasedConfig;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#scope CustomTaxonomyClassifier#scope}
  */
  readonly scope?: CustomTaxonomyClassifierScope;
}
export interface CustomTaxonomyClassifierCustomConfig {
  /**
  * Field name pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#field_name_pattern CustomTaxonomyClassifier#field_name_pattern}
  */
  readonly fieldNamePattern?: string;
  /**
  * Field type, valid types are: ANY, TEXT, NUMERIC, DATE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#field_type CustomTaxonomyClassifier#field_type}
  */
  readonly fieldType: string;
  /**
  * Should value match be case sensitive. Relevant for `values` and `value_pattern` only, in other cases ignored. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#value_case_sensitive CustomTaxonomyClassifier#value_case_sensitive}
  */
  readonly valueCaseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Value pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#value_pattern CustomTaxonomyClassifier#value_pattern}
  */
  readonly valuePattern?: string;
  /**
  * List of possible field values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#values CustomTaxonomyClassifier#values}
  */
  readonly values?: string[];
}

export function customTaxonomyClassifierCustomConfigToTerraform(struct?: CustomTaxonomyClassifierCustomConfigOutputReference | CustomTaxonomyClassifierCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name_pattern: cdktf.stringToTerraform(struct!.fieldNamePattern),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    value_case_sensitive: cdktf.booleanToTerraform(struct!.valueCaseSensitive),
    value_pattern: cdktf.stringToTerraform(struct!.valuePattern),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function customTaxonomyClassifierCustomConfigToHclTerraform(struct?: CustomTaxonomyClassifierCustomConfigOutputReference | CustomTaxonomyClassifierCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name_pattern: {
      value: cdktf.stringToHclTerraform(struct!.fieldNamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.valueCaseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.valuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomTaxonomyClassifierCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomTaxonomyClassifierCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldNamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNamePattern = this._fieldNamePattern;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._valueCaseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueCaseSensitive = this._valueCaseSensitive;
    }
    if (this._valuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomTaxonomyClassifierCustomConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldNamePattern = undefined;
      this._fieldType = undefined;
      this._valueCaseSensitive = undefined;
      this._valuePattern = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldNamePattern = value.fieldNamePattern;
      this._fieldType = value.fieldType;
      this._valueCaseSensitive = value.valueCaseSensitive;
      this._valuePattern = value.valuePattern;
      this._values = value.values;
    }
  }

  // field_name_pattern - computed: false, optional: true, required: false
  private _fieldNamePattern?: string; 
  public get fieldNamePattern() {
    return this.getStringAttribute('field_name_pattern');
  }
  public set fieldNamePattern(value: string) {
    this._fieldNamePattern = value;
  }
  public resetFieldNamePattern() {
    this._fieldNamePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNamePatternInput() {
    return this._fieldNamePattern;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // value_case_sensitive - computed: false, optional: true, required: false
  private _valueCaseSensitive?: boolean | cdktf.IResolvable; 
  public get valueCaseSensitive() {
    return this.getBooleanAttribute('value_case_sensitive');
  }
  public set valueCaseSensitive(value: boolean | cdktf.IResolvable) {
    this._valueCaseSensitive = value;
  }
  public resetValueCaseSensitive() {
    this._valueCaseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueCaseSensitiveInput() {
    return this._valueCaseSensitive;
  }

  // value_pattern - computed: false, optional: true, required: false
  private _valuePattern?: string; 
  public get valuePattern() {
    return this.getStringAttribute('value_pattern');
  }
  public set valuePattern(value: string) {
    this._valuePattern = value;
  }
  public resetValuePattern() {
    this._valuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface CustomTaxonomyClassifierSatoriBasedConfig {
  /**
  * Base Satori classifier ID.
  * See https://satoricyber.com/docs/taxonomy/standard-classifiers for a list of possible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#satori_base_classifier CustomTaxonomyClassifier#satori_base_classifier}
  */
  readonly satoriBaseClassifier: string;
}

export function customTaxonomyClassifierSatoriBasedConfigToTerraform(struct?: CustomTaxonomyClassifierSatoriBasedConfigOutputReference | CustomTaxonomyClassifierSatoriBasedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    satori_base_classifier: cdktf.stringToTerraform(struct!.satoriBaseClassifier),
  }
}


export function customTaxonomyClassifierSatoriBasedConfigToHclTerraform(struct?: CustomTaxonomyClassifierSatoriBasedConfigOutputReference | CustomTaxonomyClassifierSatoriBasedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    satori_base_classifier: {
      value: cdktf.stringToHclTerraform(struct!.satoriBaseClassifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomTaxonomyClassifierSatoriBasedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomTaxonomyClassifierSatoriBasedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._satoriBaseClassifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.satoriBaseClassifier = this._satoriBaseClassifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomTaxonomyClassifierSatoriBasedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._satoriBaseClassifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._satoriBaseClassifier = value.satoriBaseClassifier;
    }
  }

  // satori_base_classifier - computed: false, optional: false, required: true
  private _satoriBaseClassifier?: string; 
  public get satoriBaseClassifier() {
    return this.getStringAttribute('satori_base_classifier');
  }
  public set satoriBaseClassifier(value: string) {
    this._satoriBaseClassifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get satoriBaseClassifierInput() {
    return this._satoriBaseClassifier;
  }
}
export interface CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocation {
  /**
  * Catalog name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#catalog CustomTaxonomyClassifier#catalog}
  */
  readonly catalog: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#db CustomTaxonomyClassifier#db}
  */
  readonly db?: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#table CustomTaxonomyClassifier#table}
  */
  readonly table?: string;
}

export function customTaxonomyClassifierScopeIncludeLocationLocationAthenaLocationToTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocation): any {
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


export function customTaxonomyClassifierScopeIncludeLocationLocationAthenaLocationToHclTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocation): any {
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

export class CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocation | undefined {
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

  public set internalValue(value: CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocation | undefined) {
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
export interface CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocation {
  /**
  * Collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#collection CustomTaxonomyClassifier#collection}
  */
  readonly collection?: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#db CustomTaxonomyClassifier#db}
  */
  readonly db: string;
}

export function customTaxonomyClassifierScopeIncludeLocationLocationMongoLocationToTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    db: cdktf.stringToTerraform(struct!.db),
  }
}


export function customTaxonomyClassifierScopeIncludeLocationLocationMongoLocationToHclTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocation): any {
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

export class CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocation | undefined {
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

  public set internalValue(value: CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocation | undefined) {
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
export interface CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocation {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#db CustomTaxonomyClassifier#db}
  */
  readonly db: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#table CustomTaxonomyClassifier#table}
  */
  readonly table?: string;
}

export function customTaxonomyClassifierScopeIncludeLocationLocationMysqlLocationToTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function customTaxonomyClassifierScopeIncludeLocationLocationMysqlLocationToHclTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocation): any {
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

export class CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocation | undefined {
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

  public set internalValue(value: CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocation | undefined) {
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
export interface CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocation {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#db CustomTaxonomyClassifier#db}
  */
  readonly db: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#schema CustomTaxonomyClassifier#schema}
  */
  readonly schema?: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#table CustomTaxonomyClassifier#table}
  */
  readonly table?: string;
}

export function customTaxonomyClassifierScopeIncludeLocationLocationRelationalLocationToTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocation): any {
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


export function customTaxonomyClassifierScopeIncludeLocationLocationRelationalLocationToHclTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocation): any {
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

export class CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocation | undefined {
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

  public set internalValue(value: CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocation | undefined) {
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
export interface CustomTaxonomyClassifierScopeIncludeLocationLocationS3Location {
  /**
  * Bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#bucket CustomTaxonomyClassifier#bucket}
  */
  readonly bucket: string;
  /**
  * Object Key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#object_key CustomTaxonomyClassifier#object_key}
  */
  readonly objectKey?: string;
}

export function customTaxonomyClassifierScopeIncludeLocationLocationS3LocationToTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationS3LocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocationS3Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object_key: cdktf.stringToTerraform(struct!.objectKey),
  }
}


export function customTaxonomyClassifierScopeIncludeLocationLocationS3LocationToHclTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationS3LocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocationS3Location): any {
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

export class CustomTaxonomyClassifierScopeIncludeLocationLocationS3LocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomTaxonomyClassifierScopeIncludeLocationLocationS3Location | undefined {
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

  public set internalValue(value: CustomTaxonomyClassifierScopeIncludeLocationLocationS3Location | undefined) {
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
export interface CustomTaxonomyClassifierScopeIncludeLocationLocation {
  /**
  * athena_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#athena_location CustomTaxonomyClassifier#athena_location}
  */
  readonly athenaLocation?: CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocation;
  /**
  * mongo_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#mongo_location CustomTaxonomyClassifier#mongo_location}
  */
  readonly mongoLocation?: CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocation;
  /**
  * mysql_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#mysql_location CustomTaxonomyClassifier#mysql_location}
  */
  readonly mysqlLocation?: CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocation;
  /**
  * relational_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#relational_location CustomTaxonomyClassifier#relational_location}
  */
  readonly relationalLocation?: CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocation;
  /**
  * s3_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#s3_location CustomTaxonomyClassifier#s3_location}
  */
  readonly s3Location?: CustomTaxonomyClassifierScopeIncludeLocationLocationS3Location;
}

export function customTaxonomyClassifierScopeIncludeLocationLocationToTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    athena_location: customTaxonomyClassifierScopeIncludeLocationLocationAthenaLocationToTerraform(struct!.athenaLocation),
    mongo_location: customTaxonomyClassifierScopeIncludeLocationLocationMongoLocationToTerraform(struct!.mongoLocation),
    mysql_location: customTaxonomyClassifierScopeIncludeLocationLocationMysqlLocationToTerraform(struct!.mysqlLocation),
    relational_location: customTaxonomyClassifierScopeIncludeLocationLocationRelationalLocationToTerraform(struct!.relationalLocation),
    s3_location: customTaxonomyClassifierScopeIncludeLocationLocationS3LocationToTerraform(struct!.s3Location),
  }
}


export function customTaxonomyClassifierScopeIncludeLocationLocationToHclTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationOutputReference | CustomTaxonomyClassifierScopeIncludeLocationLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    athena_location: {
      value: customTaxonomyClassifierScopeIncludeLocationLocationAthenaLocationToHclTerraform(struct!.athenaLocation),
      isBlock: true,
      type: "list",
      storageClassType: "CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocationList",
    },
    mongo_location: {
      value: customTaxonomyClassifierScopeIncludeLocationLocationMongoLocationToHclTerraform(struct!.mongoLocation),
      isBlock: true,
      type: "list",
      storageClassType: "CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocationList",
    },
    mysql_location: {
      value: customTaxonomyClassifierScopeIncludeLocationLocationMysqlLocationToHclTerraform(struct!.mysqlLocation),
      isBlock: true,
      type: "list",
      storageClassType: "CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocationList",
    },
    relational_location: {
      value: customTaxonomyClassifierScopeIncludeLocationLocationRelationalLocationToHclTerraform(struct!.relationalLocation),
      isBlock: true,
      type: "list",
      storageClassType: "CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocationList",
    },
    s3_location: {
      value: customTaxonomyClassifierScopeIncludeLocationLocationS3LocationToHclTerraform(struct!.s3Location),
      isBlock: true,
      type: "list",
      storageClassType: "CustomTaxonomyClassifierScopeIncludeLocationLocationS3LocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomTaxonomyClassifierScopeIncludeLocationLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomTaxonomyClassifierScopeIncludeLocationLocation | undefined {
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

  public set internalValue(value: CustomTaxonomyClassifierScopeIncludeLocationLocation | undefined) {
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
  private _athenaLocation = new CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocationOutputReference(this, "athena_location");
  public get athenaLocation() {
    return this._athenaLocation;
  }
  public putAthenaLocation(value: CustomTaxonomyClassifierScopeIncludeLocationLocationAthenaLocation) {
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
  private _mongoLocation = new CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocationOutputReference(this, "mongo_location");
  public get mongoLocation() {
    return this._mongoLocation;
  }
  public putMongoLocation(value: CustomTaxonomyClassifierScopeIncludeLocationLocationMongoLocation) {
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
  private _mysqlLocation = new CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocationOutputReference(this, "mysql_location");
  public get mysqlLocation() {
    return this._mysqlLocation;
  }
  public putMysqlLocation(value: CustomTaxonomyClassifierScopeIncludeLocationLocationMysqlLocation) {
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
  private _relationalLocation = new CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocationOutputReference(this, "relational_location");
  public get relationalLocation() {
    return this._relationalLocation;
  }
  public putRelationalLocation(value: CustomTaxonomyClassifierScopeIncludeLocationLocationRelationalLocation) {
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
  private _s3Location = new CustomTaxonomyClassifierScopeIncludeLocationLocationS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: CustomTaxonomyClassifierScopeIncludeLocationLocationS3Location) {
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
export interface CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFull {
  /**
  * The name of the location part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#name CustomTaxonomyClassifier#name}
  */
  readonly name: string;
  /**
  * The type of the location part. Optional values: TABLE, COLUMN, SEMANTIC_MODEL, REPORT, DASHBOARD, DATABASE, SCHEMA, JSON_PATH, WAREHOUSE, ENDPOINT, TYPE, FIELD, EXTERNAL_LOCATION, CATALOG, BUCKET, OBJECT, COLLECTION, VIEW, etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#type CustomTaxonomyClassifier#type}
  */
  readonly type: string;
}

export function customTaxonomyClassifierScopeIncludeLocationLocationPartsFullToTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function customTaxonomyClassifierScopeIncludeLocationLocationPartsFullToHclTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFull | cdktf.IResolvable): any {
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

export class CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFullOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFull | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFull | cdktf.IResolvable | undefined) {
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

export class CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFullList extends cdktf.ComplexList {
  public internalValue? : CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFull[] | cdktf.IResolvable

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
  public get(index: number): CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFullOutputReference {
    return new CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFullOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomTaxonomyClassifierScopeIncludeLocation {
  /**
  * Data store ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#datastore CustomTaxonomyClassifier#datastore}
  */
  readonly datastore: string;
  /**
  * The part separated location path in the data store. Includes an array of path parts when part types are defined with default definitions. For example ['a', 'b', 'c'] in Snowflake data store will path to table 'a' under schema 'b' under database 'a'. Conflicts with 'location', 'location_path', and 'location_parts_full' fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#location_parts CustomTaxonomyClassifier#location_parts}
  */
  readonly locationParts?: string[];
  /**
  * The short presentation of the location path in the data store. Includes `.` separated string when part types are defined with default definitions. For example 'a.b.c' in Snowflake data store will path to table 'a' under schema 'b' under database 'a'.  Conflicts with 'location', 'location_parts', and 'location_parts_full' fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#location_path CustomTaxonomyClassifier#location_path}
  */
  readonly locationPath?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#location CustomTaxonomyClassifier#location}
  */
  readonly location?: CustomTaxonomyClassifierScopeIncludeLocationLocation;
  /**
  * location_parts_full block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#location_parts_full CustomTaxonomyClassifier#location_parts_full}
  */
  readonly locationPartsFull?: CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFull[] | cdktf.IResolvable;
}

export function customTaxonomyClassifierScopeIncludeLocationToTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore: cdktf.stringToTerraform(struct!.datastore),
    location_parts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locationParts),
    location_path: cdktf.stringToTerraform(struct!.locationPath),
    location: customTaxonomyClassifierScopeIncludeLocationLocationToTerraform(struct!.location),
    location_parts_full: cdktf.listMapper(customTaxonomyClassifierScopeIncludeLocationLocationPartsFullToTerraform, true)(struct!.locationPartsFull),
  }
}


export function customTaxonomyClassifierScopeIncludeLocationToHclTerraform(struct?: CustomTaxonomyClassifierScopeIncludeLocation | cdktf.IResolvable): any {
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
      value: customTaxonomyClassifierScopeIncludeLocationLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "CustomTaxonomyClassifierScopeIncludeLocationLocationList",
    },
    location_parts_full: {
      value: cdktf.listMapperHcl(customTaxonomyClassifierScopeIncludeLocationLocationPartsFullToHclTerraform, true)(struct!.locationPartsFull),
      isBlock: true,
      type: "list",
      storageClassType: "CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFullList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomTaxonomyClassifierScopeIncludeLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomTaxonomyClassifierScopeIncludeLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomTaxonomyClassifierScopeIncludeLocation | cdktf.IResolvable | undefined) {
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
  private _location = new CustomTaxonomyClassifierScopeIncludeLocationLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: CustomTaxonomyClassifierScopeIncludeLocationLocation) {
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
  private _locationPartsFull = new CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFullList(this, "location_parts_full", false);
  public get locationPartsFull() {
    return this._locationPartsFull;
  }
  public putLocationPartsFull(value: CustomTaxonomyClassifierScopeIncludeLocationLocationPartsFull[] | cdktf.IResolvable) {
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

export class CustomTaxonomyClassifierScopeIncludeLocationList extends cdktf.ComplexList {
  public internalValue? : CustomTaxonomyClassifierScopeIncludeLocation[] | cdktf.IResolvable

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
  public get(index: number): CustomTaxonomyClassifierScopeIncludeLocationOutputReference {
    return new CustomTaxonomyClassifierScopeIncludeLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomTaxonomyClassifierScope {
  /**
  * IDs of datasets to include in the scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#datasets CustomTaxonomyClassifier#datasets}
  */
  readonly datasets?: string[];
  /**
  * include_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#include_location CustomTaxonomyClassifier#include_location}
  */
  readonly includeLocation?: CustomTaxonomyClassifierScopeIncludeLocation[] | cdktf.IResolvable;
}

export function customTaxonomyClassifierScopeToTerraform(struct?: CustomTaxonomyClassifierScopeOutputReference | CustomTaxonomyClassifierScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datasets),
    include_location: cdktf.listMapper(customTaxonomyClassifierScopeIncludeLocationToTerraform, true)(struct!.includeLocation),
  }
}


export function customTaxonomyClassifierScopeToHclTerraform(struct?: CustomTaxonomyClassifierScopeOutputReference | CustomTaxonomyClassifierScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.datasets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_location: {
      value: cdktf.listMapperHcl(customTaxonomyClassifierScopeIncludeLocationToHclTerraform, true)(struct!.includeLocation),
      isBlock: true,
      type: "list",
      storageClassType: "CustomTaxonomyClassifierScopeIncludeLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomTaxonomyClassifierScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomTaxonomyClassifierScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasets !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasets = this._datasets;
    }
    if (this._includeLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLocation = this._includeLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomTaxonomyClassifierScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasets = undefined;
      this._includeLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasets = value.datasets;
      this._includeLocation.internalValue = value.includeLocation;
    }
  }

  // datasets - computed: false, optional: true, required: false
  private _datasets?: string[]; 
  public get datasets() {
    return this.getListAttribute('datasets');
  }
  public set datasets(value: string[]) {
    this._datasets = value;
  }
  public resetDatasets() {
    this._datasets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetsInput() {
    return this._datasets;
  }

  // include_location - computed: false, optional: true, required: false
  private _includeLocation = new CustomTaxonomyClassifierScopeIncludeLocationList(this, "include_location", false);
  public get includeLocation() {
    return this._includeLocation;
  }
  public putIncludeLocation(value: CustomTaxonomyClassifierScopeIncludeLocation[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier satori_custom_taxonomy_classifier}
*/
export class CustomTaxonomyClassifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "satori_custom_taxonomy_classifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomTaxonomyClassifier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomTaxonomyClassifier to import
  * @param importFromId The id of the existing CustomTaxonomyClassifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomTaxonomyClassifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "satori_custom_taxonomy_classifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/custom_taxonomy_classifier satori_custom_taxonomy_classifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomTaxonomyClassifierConfig
  */
  public constructor(scope: Construct, id: string, config: CustomTaxonomyClassifierConfig) {
    super(scope, id, {
      terraformResourceType: 'satori_custom_taxonomy_classifier',
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
    this._additionalSatoriCategories = config.additionalSatoriCategories;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._parentCategory = config.parentCategory;
    this._type = config.type;
    this._customConfig.internalValue = config.customConfig;
    this._satoriBasedConfig.internalValue = config.satoriBasedConfig;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_satori_categories - computed: false, optional: true, required: false
  private _additionalSatoriCategories?: string[]; 
  public get additionalSatoriCategories() {
    return this.getListAttribute('additional_satori_categories');
  }
  public set additionalSatoriCategories(value: string[]) {
    this._additionalSatoriCategories = value;
  }
  public resetAdditionalSatoriCategories() {
    this._additionalSatoriCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSatoriCategoriesInput() {
    return this._additionalSatoriCategories;
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

  // parent_category - computed: false, optional: true, required: false
  private _parentCategory?: string; 
  public get parentCategory() {
    return this.getStringAttribute('parent_category');
  }
  public set parentCategory(value: string) {
    this._parentCategory = value;
  }
  public resetParentCategory() {
    this._parentCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentCategoryInput() {
    return this._parentCategory;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
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

  // custom_config - computed: false, optional: true, required: false
  private _customConfig = new CustomTaxonomyClassifierCustomConfigOutputReference(this, "custom_config");
  public get customConfig() {
    return this._customConfig;
  }
  public putCustomConfig(value: CustomTaxonomyClassifierCustomConfig) {
    this._customConfig.internalValue = value;
  }
  public resetCustomConfig() {
    this._customConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig.internalValue;
  }

  // satori_based_config - computed: false, optional: true, required: false
  private _satoriBasedConfig = new CustomTaxonomyClassifierSatoriBasedConfigOutputReference(this, "satori_based_config");
  public get satoriBasedConfig() {
    return this._satoriBasedConfig;
  }
  public putSatoriBasedConfig(value: CustomTaxonomyClassifierSatoriBasedConfig) {
    this._satoriBasedConfig.internalValue = value;
  }
  public resetSatoriBasedConfig() {
    this._satoriBasedConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satoriBasedConfigInput() {
    return this._satoriBasedConfig.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new CustomTaxonomyClassifierScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: CustomTaxonomyClassifierScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_satori_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalSatoriCategories),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_category: cdktf.stringToTerraform(this._parentCategory),
      type: cdktf.stringToTerraform(this._type),
      custom_config: customTaxonomyClassifierCustomConfigToTerraform(this._customConfig.internalValue),
      satori_based_config: customTaxonomyClassifierSatoriBasedConfigToTerraform(this._satoriBasedConfig.internalValue),
      scope: customTaxonomyClassifierScopeToTerraform(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_satori_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalSatoriCategories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_category: {
        value: cdktf.stringToHclTerraform(this._parentCategory),
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
      custom_config: {
        value: customTaxonomyClassifierCustomConfigToHclTerraform(this._customConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomTaxonomyClassifierCustomConfigList",
      },
      satori_based_config: {
        value: customTaxonomyClassifierSatoriBasedConfigToHclTerraform(this._satoriBasedConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomTaxonomyClassifierSatoriBasedConfigList",
      },
      scope: {
        value: customTaxonomyClassifierScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomTaxonomyClassifierScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
