// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeSensitiveDataModelReferentialRelationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#id DataSafeSensitiveDataModelReferentialRelation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#is_sensitive DataSafeSensitiveDataModelReferentialRelation#is_sensitive}
  */
  readonly isSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#relation_type DataSafeSensitiveDataModelReferentialRelation#relation_type}
  */
  readonly relationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#sensitive_data_model_id DataSafeSensitiveDataModelReferentialRelation#sensitive_data_model_id}
  */
  readonly sensitiveDataModelId: string;
  /**
  * child block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#child DataSafeSensitiveDataModelReferentialRelation#child}
  */
  readonly child: DataSafeSensitiveDataModelReferentialRelationChild;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#parent DataSafeSensitiveDataModelReferentialRelation#parent}
  */
  readonly parent: DataSafeSensitiveDataModelReferentialRelationParent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#timeouts DataSafeSensitiveDataModelReferentialRelation#timeouts}
  */
  readonly timeouts?: DataSafeSensitiveDataModelReferentialRelationTimeouts;
}
export interface DataSafeSensitiveDataModelReferentialRelationChild {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#app_name DataSafeSensitiveDataModelReferentialRelation#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#column_group DataSafeSensitiveDataModelReferentialRelation#column_group}
  */
  readonly columnGroup: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#object DataSafeSensitiveDataModelReferentialRelation#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#object_type DataSafeSensitiveDataModelReferentialRelation#object_type}
  */
  readonly objectType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#schema_name DataSafeSensitiveDataModelReferentialRelation#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#sensitive_type_ids DataSafeSensitiveDataModelReferentialRelation#sensitive_type_ids}
  */
  readonly sensitiveTypeIds?: string[];
}

export function dataSafeSensitiveDataModelReferentialRelationChildToTerraform(struct?: DataSafeSensitiveDataModelReferentialRelationChildOutputReference | DataSafeSensitiveDataModelReferentialRelationChild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_name: cdktf.stringToTerraform(struct!.appName),
    column_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnGroup),
    object: cdktf.stringToTerraform(struct!.object),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    sensitive_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sensitiveTypeIds),
  }
}


export function dataSafeSensitiveDataModelReferentialRelationChildToHclTerraform(struct?: DataSafeSensitiveDataModelReferentialRelationChildOutputReference | DataSafeSensitiveDataModelReferentialRelationChild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive_type_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sensitiveTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeSensitiveDataModelReferentialRelationChildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeSensitiveDataModelReferentialRelationChild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._columnGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnGroup = this._columnGroup;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._sensitiveTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveTypeIds = this._sensitiveTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSensitiveDataModelReferentialRelationChild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appName = undefined;
      this._columnGroup = undefined;
      this._object = undefined;
      this._objectType = undefined;
      this._schemaName = undefined;
      this._sensitiveTypeIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appName = value.appName;
      this._columnGroup = value.columnGroup;
      this._object = value.object;
      this._objectType = value.objectType;
      this._schemaName = value.schemaName;
      this._sensitiveTypeIds = value.sensitiveTypeIds;
    }
  }

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // column_group - computed: false, optional: false, required: true
  private _columnGroup?: string[]; 
  public get columnGroup() {
    return this.getListAttribute('column_group');
  }
  public set columnGroup(value: string[]) {
    this._columnGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGroupInput() {
    return this._columnGroup;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // sensitive_type_ids - computed: true, optional: true, required: false
  private _sensitiveTypeIds?: string[]; 
  public get sensitiveTypeIds() {
    return this.getListAttribute('sensitive_type_ids');
  }
  public set sensitiveTypeIds(value: string[]) {
    this._sensitiveTypeIds = value;
  }
  public resetSensitiveTypeIds() {
    this._sensitiveTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeIdsInput() {
    return this._sensitiveTypeIds;
  }
}
export interface DataSafeSensitiveDataModelReferentialRelationParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#app_name DataSafeSensitiveDataModelReferentialRelation#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#column_group DataSafeSensitiveDataModelReferentialRelation#column_group}
  */
  readonly columnGroup: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#object DataSafeSensitiveDataModelReferentialRelation#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#object_type DataSafeSensitiveDataModelReferentialRelation#object_type}
  */
  readonly objectType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#schema_name DataSafeSensitiveDataModelReferentialRelation#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#sensitive_type_ids DataSafeSensitiveDataModelReferentialRelation#sensitive_type_ids}
  */
  readonly sensitiveTypeIds?: string[];
}

export function dataSafeSensitiveDataModelReferentialRelationParentToTerraform(struct?: DataSafeSensitiveDataModelReferentialRelationParentOutputReference | DataSafeSensitiveDataModelReferentialRelationParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_name: cdktf.stringToTerraform(struct!.appName),
    column_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnGroup),
    object: cdktf.stringToTerraform(struct!.object),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    sensitive_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sensitiveTypeIds),
  }
}


export function dataSafeSensitiveDataModelReferentialRelationParentToHclTerraform(struct?: DataSafeSensitiveDataModelReferentialRelationParentOutputReference | DataSafeSensitiveDataModelReferentialRelationParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive_type_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sensitiveTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeSensitiveDataModelReferentialRelationParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeSensitiveDataModelReferentialRelationParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._columnGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnGroup = this._columnGroup;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._sensitiveTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveTypeIds = this._sensitiveTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSensitiveDataModelReferentialRelationParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appName = undefined;
      this._columnGroup = undefined;
      this._object = undefined;
      this._objectType = undefined;
      this._schemaName = undefined;
      this._sensitiveTypeIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appName = value.appName;
      this._columnGroup = value.columnGroup;
      this._object = value.object;
      this._objectType = value.objectType;
      this._schemaName = value.schemaName;
      this._sensitiveTypeIds = value.sensitiveTypeIds;
    }
  }

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // column_group - computed: false, optional: false, required: true
  private _columnGroup?: string[]; 
  public get columnGroup() {
    return this.getListAttribute('column_group');
  }
  public set columnGroup(value: string[]) {
    this._columnGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGroupInput() {
    return this._columnGroup;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // sensitive_type_ids - computed: true, optional: true, required: false
  private _sensitiveTypeIds?: string[]; 
  public get sensitiveTypeIds() {
    return this.getListAttribute('sensitive_type_ids');
  }
  public set sensitiveTypeIds(value: string[]) {
    this._sensitiveTypeIds = value;
  }
  public resetSensitiveTypeIds() {
    this._sensitiveTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeIdsInput() {
    return this._sensitiveTypeIds;
  }
}
export interface DataSafeSensitiveDataModelReferentialRelationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#create DataSafeSensitiveDataModelReferentialRelation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#delete DataSafeSensitiveDataModelReferentialRelation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#update DataSafeSensitiveDataModelReferentialRelation#update}
  */
  readonly update?: string;
}

export function dataSafeSensitiveDataModelReferentialRelationTimeoutsToTerraform(struct?: DataSafeSensitiveDataModelReferentialRelationTimeouts | cdktf.IResolvable): any {
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


export function dataSafeSensitiveDataModelReferentialRelationTimeoutsToHclTerraform(struct?: DataSafeSensitiveDataModelReferentialRelationTimeouts | cdktf.IResolvable): any {
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

export class DataSafeSensitiveDataModelReferentialRelationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeSensitiveDataModelReferentialRelationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeSensitiveDataModelReferentialRelationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation oci_data_safe_sensitive_data_model_referential_relation}
*/
export class DataSafeSensitiveDataModelReferentialRelation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sensitive_data_model_referential_relation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeSensitiveDataModelReferentialRelation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeSensitiveDataModelReferentialRelation to import
  * @param importFromId The id of the existing DataSafeSensitiveDataModelReferentialRelation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeSensitiveDataModelReferentialRelation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sensitive_data_model_referential_relation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_sensitive_data_model_referential_relation oci_data_safe_sensitive_data_model_referential_relation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeSensitiveDataModelReferentialRelationConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeSensitiveDataModelReferentialRelationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sensitive_data_model_referential_relation',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._isSensitive = config.isSensitive;
    this._relationType = config.relationType;
    this._sensitiveDataModelId = config.sensitiveDataModelId;
    this._child.internalValue = config.child;
    this._parent.internalValue = config.parent;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_sensitive - computed: true, optional: true, required: false
  private _isSensitive?: boolean | cdktf.IResolvable; 
  public get isSensitive() {
    return this.getBooleanAttribute('is_sensitive');
  }
  public set isSensitive(value: boolean | cdktf.IResolvable) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // relation_type - computed: false, optional: false, required: true
  private _relationType?: string; 
  public get relationType() {
    return this.getStringAttribute('relation_type');
  }
  public set relationType(value: string) {
    this._relationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationTypeInput() {
    return this._relationType;
  }

  // sensitive_data_model_id - computed: false, optional: false, required: true
  private _sensitiveDataModelId?: string; 
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }
  public set sensitiveDataModelId(value: string) {
    this._sensitiveDataModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataModelIdInput() {
    return this._sensitiveDataModelId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // child - computed: false, optional: false, required: true
  private _child = new DataSafeSensitiveDataModelReferentialRelationChildOutputReference(this, "child");
  public get child() {
    return this._child;
  }
  public putChild(value: DataSafeSensitiveDataModelReferentialRelationChild) {
    this._child.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childInput() {
    return this._child.internalValue;
  }

  // parent - computed: false, optional: false, required: true
  private _parent = new DataSafeSensitiveDataModelReferentialRelationParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataSafeSensitiveDataModelReferentialRelationParent) {
    this._parent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeSensitiveDataModelReferentialRelationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeSensitiveDataModelReferentialRelationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      is_sensitive: cdktf.booleanToTerraform(this._isSensitive),
      relation_type: cdktf.stringToTerraform(this._relationType),
      sensitive_data_model_id: cdktf.stringToTerraform(this._sensitiveDataModelId),
      child: dataSafeSensitiveDataModelReferentialRelationChildToTerraform(this._child.internalValue),
      parent: dataSafeSensitiveDataModelReferentialRelationParentToTerraform(this._parent.internalValue),
      timeouts: dataSafeSensitiveDataModelReferentialRelationTimeoutsToTerraform(this._timeouts.internalValue),
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
      is_sensitive: {
        value: cdktf.booleanToHclTerraform(this._isSensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      relation_type: {
        value: cdktf.stringToHclTerraform(this._relationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_data_model_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveDataModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child: {
        value: dataSafeSensitiveDataModelReferentialRelationChildToHclTerraform(this._child.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeSensitiveDataModelReferentialRelationChildList",
      },
      parent: {
        value: dataSafeSensitiveDataModelReferentialRelationParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeSensitiveDataModelReferentialRelationParentList",
      },
      timeouts: {
        value: dataSafeSensitiveDataModelReferentialRelationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeSensitiveDataModelReferentialRelationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
