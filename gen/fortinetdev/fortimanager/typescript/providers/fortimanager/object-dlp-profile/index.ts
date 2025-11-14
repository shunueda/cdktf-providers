// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectDlpProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#adom ObjectDlpProfile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#comment ObjectDlpProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#dlp_log ObjectDlpProfile#dlp_log}
  */
  readonly dlpLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#dynamic_sort_subtable ObjectDlpProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#extended_log ObjectDlpProfile#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#feature_set ObjectDlpProfile#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#fortidata_error_action ObjectDlpProfile#fortidata_error_action}
  */
  readonly fortidataErrorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#full_archive_proto ObjectDlpProfile#full_archive_proto}
  */
  readonly fullArchiveProto?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#id ObjectDlpProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#nac_quar_log ObjectDlpProfile#nac_quar_log}
  */
  readonly nacQuarLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#name ObjectDlpProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#replacemsg_group ObjectDlpProfile#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#scopetype ObjectDlpProfile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#summary_proto ObjectDlpProfile#summary_proto}
  */
  readonly summaryProto?: string[];
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#rule ObjectDlpProfile#rule}
  */
  readonly rule?: ObjectDlpProfileRule[] | cdktf.IResolvable;
}
export interface ObjectDlpProfileRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#action ObjectDlpProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#archive ObjectDlpProfile#archive}
  */
  readonly archive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#expiry ObjectDlpProfile#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#file_size ObjectDlpProfile#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#file_type ObjectDlpProfile#file_type}
  */
  readonly fileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#filter_by ObjectDlpProfile#filter_by}
  */
  readonly filterBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#id ObjectDlpProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#label ObjectDlpProfile#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#match_percentage ObjectDlpProfile#match_percentage}
  */
  readonly matchPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#name ObjectDlpProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#proto ObjectDlpProfile#proto}
  */
  readonly proto?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#sensitivity ObjectDlpProfile#sensitivity}
  */
  readonly sensitivity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#sensor ObjectDlpProfile#sensor}
  */
  readonly sensor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#severity ObjectDlpProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#type ObjectDlpProfile#type}
  */
  readonly type?: string;
}

export function objectDlpProfileRuleToTerraform(struct?: ObjectDlpProfileRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    archive: cdktf.stringToTerraform(struct!.archive),
    expiry: cdktf.stringToTerraform(struct!.expiry),
    file_size: cdktf.numberToTerraform(struct!.fileSize),
    file_type: cdktf.stringToTerraform(struct!.fileType),
    filter_by: cdktf.stringToTerraform(struct!.filterBy),
    id: cdktf.numberToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    match_percentage: cdktf.numberToTerraform(struct!.matchPercentage),
    name: cdktf.stringToTerraform(struct!.name),
    proto: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proto),
    sensitivity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sensitivity),
    sensor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sensor),
    severity: cdktf.stringToTerraform(struct!.severity),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectDlpProfileRuleToHclTerraform(struct?: ObjectDlpProfileRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive: {
      value: cdktf.stringToHclTerraform(struct!.archive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry: {
      value: cdktf.stringToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_size: {
      value: cdktf.numberToHclTerraform(struct!.fileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_by: {
      value: cdktf.stringToHclTerraform(struct!.filterBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_percentage: {
      value: cdktf.numberToHclTerraform(struct!.matchPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proto),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sensitivity: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sensitivity),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sensor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sensor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
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

export class ObjectDlpProfileRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectDlpProfileRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._archive !== undefined) {
      hasAnyValues = true;
      internalValueResult.archive = this._archive;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._fileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSize = this._fileSize;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._filterBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterBy = this._filterBy;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._matchPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPercentage = this._matchPercentage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._sensor !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensor = this._sensor;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectDlpProfileRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._archive = undefined;
      this._expiry = undefined;
      this._fileSize = undefined;
      this._fileType = undefined;
      this._filterBy = undefined;
      this._id = undefined;
      this._label = undefined;
      this._matchPercentage = undefined;
      this._name = undefined;
      this._proto = undefined;
      this._sensitivity = undefined;
      this._sensor = undefined;
      this._severity = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._archive = value.archive;
      this._expiry = value.expiry;
      this._fileSize = value.fileSize;
      this._fileType = value.fileType;
      this._filterBy = value.filterBy;
      this._id = value.id;
      this._label = value.label;
      this._matchPercentage = value.matchPercentage;
      this._name = value.name;
      this._proto = value.proto;
      this._sensitivity = value.sensitivity;
      this._sensor = value.sensor;
      this._severity = value.severity;
      this._type = value.type;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // archive - computed: true, optional: true, required: false
  private _archive?: string; 
  public get archive() {
    return this.getStringAttribute('archive');
  }
  public set archive(value: string) {
    this._archive = value;
  }
  public resetArchive() {
    this._archive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive;
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // file_size - computed: false, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // filter_by - computed: true, optional: true, required: false
  private _filterBy?: string; 
  public get filterBy() {
    return this.getStringAttribute('filter_by');
  }
  public set filterBy(value: string) {
    this._filterBy = value;
  }
  public resetFilterBy() {
    this._filterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // match_percentage - computed: false, optional: true, required: false
  private _matchPercentage?: number; 
  public get matchPercentage() {
    return this.getNumberAttribute('match_percentage');
  }
  public set matchPercentage(value: number) {
    this._matchPercentage = value;
  }
  public resetMatchPercentage() {
    this._matchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPercentageInput() {
    return this._matchPercentage;
  }

  // name - computed: false, optional: true, required: false
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

  // proto - computed: true, optional: true, required: false
  private _proto?: string[]; 
  public get proto() {
    return cdktf.Fn.tolist(this.getListAttribute('proto'));
  }
  public set proto(value: string[]) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // sensitivity - computed: true, optional: true, required: false
  private _sensitivity?: string[]; 
  public get sensitivity() {
    return cdktf.Fn.tolist(this.getListAttribute('sensitivity'));
  }
  public set sensitivity(value: string[]) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // sensor - computed: true, optional: true, required: false
  private _sensor?: string[]; 
  public get sensor() {
    return cdktf.Fn.tolist(this.getListAttribute('sensor'));
  }
  public set sensor(value: string[]) {
    this._sensor = value;
  }
  public resetSensor() {
    this._sensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorInput() {
    return this._sensor;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

export class ObjectDlpProfileRuleList extends cdktf.ComplexList {
  public internalValue? : ObjectDlpProfileRule[] | cdktf.IResolvable

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
  public get(index: number): ObjectDlpProfileRuleOutputReference {
    return new ObjectDlpProfileRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile fortimanager_object_dlp_profile}
*/
export class ObjectDlpProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_dlp_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectDlpProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectDlpProfile to import
  * @param importFromId The id of the existing ObjectDlpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectDlpProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_dlp_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_dlp_profile fortimanager_object_dlp_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectDlpProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectDlpProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_dlp_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._comment = config.comment;
    this._dlpLog = config.dlpLog;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extendedLog = config.extendedLog;
    this._featureSet = config.featureSet;
    this._fortidataErrorAction = config.fortidataErrorAction;
    this._fullArchiveProto = config.fullArchiveProto;
    this._id = config.id;
    this._nacQuarLog = config.nacQuarLog;
    this._name = config.name;
    this._replacemsgGroup = config.replacemsgGroup;
    this._scopetype = config.scopetype;
    this._summaryProto = config.summaryProto;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dlp_log - computed: true, optional: true, required: false
  private _dlpLog?: string; 
  public get dlpLog() {
    return this.getStringAttribute('dlp_log');
  }
  public set dlpLog(value: string) {
    this._dlpLog = value;
  }
  public resetDlpLog() {
    this._dlpLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpLogInput() {
    return this._dlpLog;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // extended_log - computed: true, optional: true, required: false
  private _extendedLog?: string; 
  public get extendedLog() {
    return this.getStringAttribute('extended_log');
  }
  public set extendedLog(value: string) {
    this._extendedLog = value;
  }
  public resetExtendedLog() {
    this._extendedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLogInput() {
    return this._extendedLog;
  }

  // feature_set - computed: true, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
  }

  // fortidata_error_action - computed: false, optional: true, required: false
  private _fortidataErrorAction?: string; 
  public get fortidataErrorAction() {
    return this.getStringAttribute('fortidata_error_action');
  }
  public set fortidataErrorAction(value: string) {
    this._fortidataErrorAction = value;
  }
  public resetFortidataErrorAction() {
    this._fortidataErrorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortidataErrorActionInput() {
    return this._fortidataErrorAction;
  }

  // full_archive_proto - computed: true, optional: true, required: false
  private _fullArchiveProto?: string[]; 
  public get fullArchiveProto() {
    return cdktf.Fn.tolist(this.getListAttribute('full_archive_proto'));
  }
  public set fullArchiveProto(value: string[]) {
    this._fullArchiveProto = value;
  }
  public resetFullArchiveProto() {
    this._fullArchiveProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullArchiveProtoInput() {
    return this._fullArchiveProto;
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

  // nac_quar_log - computed: true, optional: true, required: false
  private _nacQuarLog?: string; 
  public get nacQuarLog() {
    return this.getStringAttribute('nac_quar_log');
  }
  public set nacQuarLog(value: string) {
    this._nacQuarLog = value;
  }
  public resetNacQuarLog() {
    this._nacQuarLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacQuarLogInput() {
    return this._nacQuarLog;
  }

  // name - computed: false, optional: true, required: false
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

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // summary_proto - computed: true, optional: true, required: false
  private _summaryProto?: string[]; 
  public get summaryProto() {
    return cdktf.Fn.tolist(this.getListAttribute('summary_proto'));
  }
  public set summaryProto(value: string[]) {
    this._summaryProto = value;
  }
  public resetSummaryProto() {
    this._summaryProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryProtoInput() {
    return this._summaryProto;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ObjectDlpProfileRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ObjectDlpProfileRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comment: cdktf.stringToTerraform(this._comment),
      dlp_log: cdktf.stringToTerraform(this._dlpLog),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      feature_set: cdktf.stringToTerraform(this._featureSet),
      fortidata_error_action: cdktf.stringToTerraform(this._fortidataErrorAction),
      full_archive_proto: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fullArchiveProto),
      id: cdktf.stringToTerraform(this._id),
      nac_quar_log: cdktf.stringToTerraform(this._nacQuarLog),
      name: cdktf.stringToTerraform(this._name),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      summary_proto: cdktf.listMapper(cdktf.stringToTerraform, false)(this._summaryProto),
      rule: cdktf.listMapper(objectDlpProfileRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_log: {
        value: cdktf.stringToHclTerraform(this._dlpLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_log: {
        value: cdktf.stringToHclTerraform(this._extendedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortidata_error_action: {
        value: cdktf.stringToHclTerraform(this._fortidataErrorAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_archive_proto: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fullArchiveProto),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nac_quar_log: {
        value: cdktf.stringToHclTerraform(this._nacQuarLog),
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
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary_proto: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._summaryProto),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rule: {
        value: cdktf.listMapperHcl(objectDlpProfileRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectDlpProfileRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
