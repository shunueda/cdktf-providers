// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementTaskRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#compartment_id FleetAppsManagementTaskRecord#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#defined_tags FleetAppsManagementTaskRecord#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#description FleetAppsManagementTaskRecord#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#display_name FleetAppsManagementTaskRecord#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#freeform_tags FleetAppsManagementTaskRecord#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#id FleetAppsManagementTaskRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#details FleetAppsManagementTaskRecord#details}
  */
  readonly details: FleetAppsManagementTaskRecordDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#timeouts FleetAppsManagementTaskRecord#timeouts}
  */
  readonly timeouts?: FleetAppsManagementTaskRecordTimeouts;
}
export interface FleetAppsManagementTaskRecordDetailsExecutionDetailsContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#bucket FleetAppsManagementTaskRecord#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#catalog_id FleetAppsManagementTaskRecord#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#checksum FleetAppsManagementTaskRecord#checksum}
  */
  readonly checksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#namespace FleetAppsManagementTaskRecord#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#object FleetAppsManagementTaskRecord#object}
  */
  readonly object?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#source_type FleetAppsManagementTaskRecord#source_type}
  */
  readonly sourceType: string;
}

export function fleetAppsManagementTaskRecordDetailsExecutionDetailsContentToTerraform(struct?: FleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference | FleetAppsManagementTaskRecordDetailsExecutionDetailsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    checksum: cdktf.stringToTerraform(struct!.checksum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function fleetAppsManagementTaskRecordDetailsExecutionDetailsContentToHclTerraform(struct?: FleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference | FleetAppsManagementTaskRecordDetailsExecutionDetailsContent): any {
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
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementTaskRecordDetailsExecutionDetailsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementTaskRecordDetailsExecutionDetailsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._catalogId = undefined;
      this._checksum = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._catalogId = value.catalogId;
      this._checksum = value.checksum;
      this._namespace = value.namespace;
      this._object = value.object;
      this._sourceType = value.sourceType;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // checksum - computed: true, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#display_name FleetAppsManagementTaskRecord#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#id FleetAppsManagementTaskRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function fleetAppsManagementTaskRecordDetailsExecutionDetailsCredentialsToTerraform(struct?: FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function fleetAppsManagementTaskRecordDetailsExecutionDetailsCredentialsToHclTerraform(struct?: FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentialsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentials[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentialsOutputReference {
    return new FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#description FleetAppsManagementTaskRecord#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#name FleetAppsManagementTaskRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#type FleetAppsManagementTaskRecord#type}
  */
  readonly type?: string;
}

export function fleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesToTerraform(struct?: FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesToHclTerraform(struct?: FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable): any {
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

export class FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
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
      this._description = value.description;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference {
    return new FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementTaskRecordDetailsExecutionDetailsVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#output_variables FleetAppsManagementTaskRecord#output_variables}
  */
  readonly outputVariables?: string[];
  /**
  * input_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#input_variables FleetAppsManagementTaskRecord#input_variables}
  */
  readonly inputVariables?: FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables[] | cdktf.IResolvable;
}

export function fleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesToTerraform(struct?: FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference | FleetAppsManagementTaskRecordDetailsExecutionDetailsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_variables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputVariables),
    input_variables: cdktf.listMapper(fleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesToTerraform, true)(struct!.inputVariables),
  }
}


export function fleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesToHclTerraform(struct?: FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference | FleetAppsManagementTaskRecordDetailsExecutionDetailsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_variables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outputVariables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_variables: {
      value: cdktf.listMapperHcl(fleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesToHclTerraform, true)(struct!.inputVariables),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementTaskRecordDetailsExecutionDetailsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariables = this._outputVariables;
    }
    if (this._inputVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariables = this._inputVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementTaskRecordDetailsExecutionDetailsVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputVariables = undefined;
      this._inputVariables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputVariables = value.outputVariables;
      this._inputVariables.internalValue = value.inputVariables;
    }
  }

  // output_variables - computed: true, optional: true, required: false
  private _outputVariables?: string[]; 
  public get outputVariables() {
    return this.getListAttribute('output_variables');
  }
  public set outputVariables(value: string[]) {
    this._outputVariables = value;
  }
  public resetOutputVariables() {
    this._outputVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariablesInput() {
    return this._outputVariables;
  }

  // input_variables - computed: false, optional: true, required: false
  private _inputVariables = new FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }
  public putInputVariables(value: FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables[] | cdktf.IResolvable) {
    this._inputVariables.internalValue = value;
  }
  public resetInputVariables() {
    this._inputVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariablesInput() {
    return this._inputVariables.internalValue;
  }
}
export interface FleetAppsManagementTaskRecordDetailsExecutionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#catalog_id FleetAppsManagementTaskRecord#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#command FleetAppsManagementTaskRecord#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#config_file FleetAppsManagementTaskRecord#config_file}
  */
  readonly configFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#endpoint FleetAppsManagementTaskRecord#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#execution_type FleetAppsManagementTaskRecord#execution_type}
  */
  readonly executionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#is_executable_content FleetAppsManagementTaskRecord#is_executable_content}
  */
  readonly isExecutableContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#is_locked FleetAppsManagementTaskRecord#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#is_read_output_variable_enabled FleetAppsManagementTaskRecord#is_read_output_variable_enabled}
  */
  readonly isReadOutputVariableEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#system_variables FleetAppsManagementTaskRecord#system_variables}
  */
  readonly systemVariables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#target_compartment_id FleetAppsManagementTaskRecord#target_compartment_id}
  */
  readonly targetCompartmentId?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#content FleetAppsManagementTaskRecord#content}
  */
  readonly content?: FleetAppsManagementTaskRecordDetailsExecutionDetailsContent;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#credentials FleetAppsManagementTaskRecord#credentials}
  */
  readonly credentials?: FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentials[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#variables FleetAppsManagementTaskRecord#variables}
  */
  readonly variables?: FleetAppsManagementTaskRecordDetailsExecutionDetailsVariables;
}

export function fleetAppsManagementTaskRecordDetailsExecutionDetailsToTerraform(struct?: FleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference | FleetAppsManagementTaskRecordDetailsExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    command: cdktf.stringToTerraform(struct!.command),
    config_file: cdktf.stringToTerraform(struct!.configFile),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    execution_type: cdktf.stringToTerraform(struct!.executionType),
    is_executable_content: cdktf.booleanToTerraform(struct!.isExecutableContent),
    is_locked: cdktf.booleanToTerraform(struct!.isLocked),
    is_read_output_variable_enabled: cdktf.booleanToTerraform(struct!.isReadOutputVariableEnabled),
    system_variables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemVariables),
    target_compartment_id: cdktf.stringToTerraform(struct!.targetCompartmentId),
    content: fleetAppsManagementTaskRecordDetailsExecutionDetailsContentToTerraform(struct!.content),
    credentials: cdktf.listMapper(fleetAppsManagementTaskRecordDetailsExecutionDetailsCredentialsToTerraform, true)(struct!.credentials),
    variables: fleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesToTerraform(struct!.variables),
  }
}


export function fleetAppsManagementTaskRecordDetailsExecutionDetailsToHclTerraform(struct?: FleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference | FleetAppsManagementTaskRecordDetailsExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_file: {
      value: cdktf.stringToHclTerraform(struct!.configFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_type: {
      value: cdktf.stringToHclTerraform(struct!.executionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_executable_content: {
      value: cdktf.booleanToHclTerraform(struct!.isExecutableContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_locked: {
      value: cdktf.booleanToHclTerraform(struct!.isLocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_read_output_variable_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isReadOutputVariableEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_variables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemVariables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.targetCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: fleetAppsManagementTaskRecordDetailsExecutionDetailsContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementTaskRecordDetailsExecutionDetailsContentList",
    },
    credentials: {
      value: cdktf.listMapperHcl(fleetAppsManagementTaskRecordDetailsExecutionDetailsCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentialsList",
    },
    variables: {
      value: fleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementTaskRecordDetailsExecutionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._configFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._executionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionType = this._executionType;
    }
    if (this._isExecutableContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isExecutableContent = this._isExecutableContent;
    }
    if (this._isLocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLocked = this._isLocked;
    }
    if (this._isReadOutputVariableEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadOutputVariableEnabled = this._isReadOutputVariableEnabled;
    }
    if (this._systemVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemVariables = this._systemVariables;
    }
    if (this._targetCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCompartmentId = this._targetCompartmentId;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementTaskRecordDetailsExecutionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._command = undefined;
      this._configFile = undefined;
      this._endpoint = undefined;
      this._executionType = undefined;
      this._isExecutableContent = undefined;
      this._isLocked = undefined;
      this._isReadOutputVariableEnabled = undefined;
      this._systemVariables = undefined;
      this._targetCompartmentId = undefined;
      this._content.internalValue = undefined;
      this._credentials.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._command = value.command;
      this._configFile = value.configFile;
      this._endpoint = value.endpoint;
      this._executionType = value.executionType;
      this._isExecutableContent = value.isExecutableContent;
      this._isLocked = value.isLocked;
      this._isReadOutputVariableEnabled = value.isReadOutputVariableEnabled;
      this._systemVariables = value.systemVariables;
      this._targetCompartmentId = value.targetCompartmentId;
      this._content.internalValue = value.content;
      this._credentials.internalValue = value.credentials;
      this._variables.internalValue = value.variables;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // config_file - computed: true, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this.getStringAttribute('config_file');
  }
  public set configFile(value: string) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // execution_type - computed: false, optional: false, required: true
  private _executionType?: string; 
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }
  public set executionType(value: string) {
    this._executionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTypeInput() {
    return this._executionType;
  }

  // is_executable_content - computed: true, optional: true, required: false
  private _isExecutableContent?: boolean | cdktf.IResolvable; 
  public get isExecutableContent() {
    return this.getBooleanAttribute('is_executable_content');
  }
  public set isExecutableContent(value: boolean | cdktf.IResolvable) {
    this._isExecutableContent = value;
  }
  public resetIsExecutableContent() {
    this._isExecutableContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExecutableContentInput() {
    return this._isExecutableContent;
  }

  // is_locked - computed: true, optional: true, required: false
  private _isLocked?: boolean | cdktf.IResolvable; 
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }
  public set isLocked(value: boolean | cdktf.IResolvable) {
    this._isLocked = value;
  }
  public resetIsLocked() {
    this._isLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockedInput() {
    return this._isLocked;
  }

  // is_read_output_variable_enabled - computed: true, optional: true, required: false
  private _isReadOutputVariableEnabled?: boolean | cdktf.IResolvable; 
  public get isReadOutputVariableEnabled() {
    return this.getBooleanAttribute('is_read_output_variable_enabled');
  }
  public set isReadOutputVariableEnabled(value: boolean | cdktf.IResolvable) {
    this._isReadOutputVariableEnabled = value;
  }
  public resetIsReadOutputVariableEnabled() {
    this._isReadOutputVariableEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOutputVariableEnabledInput() {
    return this._isReadOutputVariableEnabled;
  }

  // system_variables - computed: true, optional: true, required: false
  private _systemVariables?: string[]; 
  public get systemVariables() {
    return this.getListAttribute('system_variables');
  }
  public set systemVariables(value: string[]) {
    this._systemVariables = value;
  }
  public resetSystemVariables() {
    this._systemVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemVariablesInput() {
    return this._systemVariables;
  }

  // target_compartment_id - computed: true, optional: true, required: false
  private _targetCompartmentId?: string; 
  public get targetCompartmentId() {
    return this.getStringAttribute('target_compartment_id');
  }
  public set targetCompartmentId(value: string) {
    this._targetCompartmentId = value;
  }
  public resetTargetCompartmentId() {
    this._targetCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCompartmentIdInput() {
    return this._targetCompartmentId;
  }

  // content - computed: false, optional: true, required: false
  private _content = new FleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: FleetAppsManagementTaskRecordDetailsExecutionDetailsContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: FleetAppsManagementTaskRecordDetailsExecutionDetailsCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new FleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: FleetAppsManagementTaskRecordDetailsExecutionDetailsVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface FleetAppsManagementTaskRecordDetailsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#num_retries FleetAppsManagementTaskRecord#num_retries}
  */
  readonly numRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#timeout_in_seconds FleetAppsManagementTaskRecord#timeout_in_seconds}
  */
  readonly timeoutInSeconds: number;
}

export function fleetAppsManagementTaskRecordDetailsPropertiesToTerraform(struct?: FleetAppsManagementTaskRecordDetailsPropertiesOutputReference | FleetAppsManagementTaskRecordDetailsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
  }
}


export function fleetAppsManagementTaskRecordDetailsPropertiesToHclTerraform(struct?: FleetAppsManagementTaskRecordDetailsPropertiesOutputReference | FleetAppsManagementTaskRecordDetailsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementTaskRecordDetailsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementTaskRecordDetailsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementTaskRecordDetailsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._timeoutInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._timeoutInSeconds = value.timeoutInSeconds;
    }
  }

  // num_retries - computed: false, optional: false, required: true
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // timeout_in_seconds - computed: false, optional: false, required: true
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }
}
export interface FleetAppsManagementTaskRecordDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#is_apply_subject_task FleetAppsManagementTaskRecord#is_apply_subject_task}
  */
  readonly isApplySubjectTask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#is_discovery_output_task FleetAppsManagementTaskRecord#is_discovery_output_task}
  */
  readonly isDiscoveryOutputTask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#operation FleetAppsManagementTaskRecord#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#os_type FleetAppsManagementTaskRecord#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#platform FleetAppsManagementTaskRecord#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#scope FleetAppsManagementTaskRecord#scope}
  */
  readonly scope: string;
  /**
  * execution_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#execution_details FleetAppsManagementTaskRecord#execution_details}
  */
  readonly executionDetails: FleetAppsManagementTaskRecordDetailsExecutionDetails;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#properties FleetAppsManagementTaskRecord#properties}
  */
  readonly properties?: FleetAppsManagementTaskRecordDetailsProperties;
}

export function fleetAppsManagementTaskRecordDetailsToTerraform(struct?: FleetAppsManagementTaskRecordDetailsOutputReference | FleetAppsManagementTaskRecordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_apply_subject_task: cdktf.booleanToTerraform(struct!.isApplySubjectTask),
    is_discovery_output_task: cdktf.booleanToTerraform(struct!.isDiscoveryOutputTask),
    operation: cdktf.stringToTerraform(struct!.operation),
    os_type: cdktf.stringToTerraform(struct!.osType),
    platform: cdktf.stringToTerraform(struct!.platform),
    scope: cdktf.stringToTerraform(struct!.scope),
    execution_details: fleetAppsManagementTaskRecordDetailsExecutionDetailsToTerraform(struct!.executionDetails),
    properties: fleetAppsManagementTaskRecordDetailsPropertiesToTerraform(struct!.properties),
  }
}


export function fleetAppsManagementTaskRecordDetailsToHclTerraform(struct?: FleetAppsManagementTaskRecordDetailsOutputReference | FleetAppsManagementTaskRecordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_apply_subject_task: {
      value: cdktf.booleanToHclTerraform(struct!.isApplySubjectTask),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_discovery_output_task: {
      value: cdktf.booleanToHclTerraform(struct!.isDiscoveryOutputTask),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_type: {
      value: cdktf.stringToHclTerraform(struct!.osType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_details: {
      value: fleetAppsManagementTaskRecordDetailsExecutionDetailsToHclTerraform(struct!.executionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementTaskRecordDetailsExecutionDetailsList",
    },
    properties: {
      value: fleetAppsManagementTaskRecordDetailsPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementTaskRecordDetailsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementTaskRecordDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementTaskRecordDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isApplySubjectTask !== undefined) {
      hasAnyValues = true;
      internalValueResult.isApplySubjectTask = this._isApplySubjectTask;
    }
    if (this._isDiscoveryOutputTask !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDiscoveryOutputTask = this._isDiscoveryOutputTask;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._executionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionDetails = this._executionDetails?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementTaskRecordDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isApplySubjectTask = undefined;
      this._isDiscoveryOutputTask = undefined;
      this._operation = undefined;
      this._osType = undefined;
      this._platform = undefined;
      this._scope = undefined;
      this._executionDetails.internalValue = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isApplySubjectTask = value.isApplySubjectTask;
      this._isDiscoveryOutputTask = value.isDiscoveryOutputTask;
      this._operation = value.operation;
      this._osType = value.osType;
      this._platform = value.platform;
      this._scope = value.scope;
      this._executionDetails.internalValue = value.executionDetails;
      this._properties.internalValue = value.properties;
    }
  }

  // is_apply_subject_task - computed: true, optional: true, required: false
  private _isApplySubjectTask?: boolean | cdktf.IResolvable; 
  public get isApplySubjectTask() {
    return this.getBooleanAttribute('is_apply_subject_task');
  }
  public set isApplySubjectTask(value: boolean | cdktf.IResolvable) {
    this._isApplySubjectTask = value;
  }
  public resetIsApplySubjectTask() {
    this._isApplySubjectTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isApplySubjectTaskInput() {
    return this._isApplySubjectTask;
  }

  // is_discovery_output_task - computed: true, optional: true, required: false
  private _isDiscoveryOutputTask?: boolean | cdktf.IResolvable; 
  public get isDiscoveryOutputTask() {
    return this.getBooleanAttribute('is_discovery_output_task');
  }
  public set isDiscoveryOutputTask(value: boolean | cdktf.IResolvable) {
    this._isDiscoveryOutputTask = value;
  }
  public resetIsDiscoveryOutputTask() {
    this._isDiscoveryOutputTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDiscoveryOutputTaskInput() {
    return this._isDiscoveryOutputTask;
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // os_type - computed: true, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // execution_details - computed: false, optional: false, required: true
  private _executionDetails = new FleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference(this, "execution_details");
  public get executionDetails() {
    return this._executionDetails;
  }
  public putExecutionDetails(value: FleetAppsManagementTaskRecordDetailsExecutionDetails) {
    this._executionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionDetailsInput() {
    return this._executionDetails.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new FleetAppsManagementTaskRecordDetailsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: FleetAppsManagementTaskRecordDetailsProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface FleetAppsManagementTaskRecordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#create FleetAppsManagementTaskRecord#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#delete FleetAppsManagementTaskRecord#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#update FleetAppsManagementTaskRecord#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementTaskRecordTimeoutsToTerraform(struct?: FleetAppsManagementTaskRecordTimeouts | cdktf.IResolvable): any {
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


export function fleetAppsManagementTaskRecordTimeoutsToHclTerraform(struct?: FleetAppsManagementTaskRecordTimeouts | cdktf.IResolvable): any {
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

export class FleetAppsManagementTaskRecordTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementTaskRecordTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementTaskRecordTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record oci_fleet_apps_management_task_record}
*/
export class FleetAppsManagementTaskRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_task_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementTaskRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementTaskRecord to import
  * @param importFromId The id of the existing FleetAppsManagementTaskRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementTaskRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_task_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_task_record oci_fleet_apps_management_task_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementTaskRecordConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementTaskRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_task_record',
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
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._details.internalValue = config.details;
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

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // details - computed: false, optional: false, required: true
  private _details = new FleetAppsManagementTaskRecordDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: FleetAppsManagementTaskRecordDetails) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementTaskRecordTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementTaskRecordTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      details: fleetAppsManagementTaskRecordDetailsToTerraform(this._details.internalValue),
      timeouts: fleetAppsManagementTaskRecordTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
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
      details: {
        value: fleetAppsManagementTaskRecordDetailsToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementTaskRecordDetailsList",
      },
      timeouts: {
        value: fleetAppsManagementTaskRecordTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementTaskRecordTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
