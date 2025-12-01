// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudThreatDetectionHoneypotPresetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#current_page DataAlicloudThreatDetectionHoneypotPresets#current_page}
  */
  readonly currentPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#enable_details DataAlicloudThreatDetectionHoneypotPresets#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#honeypot_image_name DataAlicloudThreatDetectionHoneypotPresets#honeypot_image_name}
  */
  readonly honeypotImageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#id DataAlicloudThreatDetectionHoneypotPresets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#ids DataAlicloudThreatDetectionHoneypotPresets#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#lang DataAlicloudThreatDetectionHoneypotPresets#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#node_id DataAlicloudThreatDetectionHoneypotPresets#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#node_name DataAlicloudThreatDetectionHoneypotPresets#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#output_file DataAlicloudThreatDetectionHoneypotPresets#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#page_number DataAlicloudThreatDetectionHoneypotPresets#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#page_size DataAlicloudThreatDetectionHoneypotPresets#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#preset_name DataAlicloudThreatDetectionHoneypotPresets#preset_name}
  */
  readonly presetName?: string;
}
export interface DataAlicloudThreatDetectionHoneypotPresetsPresetsMeta {
}

export function dataAlicloudThreatDetectionHoneypotPresetsPresetsMetaToTerraform(struct?: DataAlicloudThreatDetectionHoneypotPresetsPresetsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudThreatDetectionHoneypotPresetsPresetsMetaToHclTerraform(struct?: DataAlicloudThreatDetectionHoneypotPresetsPresetsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudThreatDetectionHoneypotPresetsPresetsMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudThreatDetectionHoneypotPresetsPresetsMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudThreatDetectionHoneypotPresetsPresetsMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burp - computed: true, optional: false, required: false
  public get burp() {
    return this.getStringAttribute('burp');
  }

  // portrait_option - computed: true, optional: false, required: false
  public get portraitOption() {
    return this.getBooleanAttribute('portrait_option');
  }

  // trojan_git - computed: true, optional: false, required: false
  public get trojanGit() {
    return this.getStringAttribute('trojan_git');
  }
}

export class DataAlicloudThreatDetectionHoneypotPresetsPresetsMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudThreatDetectionHoneypotPresetsPresetsMetaOutputReference {
    return new DataAlicloudThreatDetectionHoneypotPresetsPresetsMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudThreatDetectionHoneypotPresetsPresets {
}

export function dataAlicloudThreatDetectionHoneypotPresetsPresetsToTerraform(struct?: DataAlicloudThreatDetectionHoneypotPresetsPresets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudThreatDetectionHoneypotPresetsPresetsToHclTerraform(struct?: DataAlicloudThreatDetectionHoneypotPresetsPresets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudThreatDetectionHoneypotPresetsPresetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudThreatDetectionHoneypotPresetsPresets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudThreatDetectionHoneypotPresetsPresets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // honeypot_image_name - computed: true, optional: false, required: false
  public get honeypotImageName() {
    return this.getStringAttribute('honeypot_image_name');
  }

  // honeypot_preset_id - computed: true, optional: false, required: false
  public get honeypotPresetId() {
    return this.getStringAttribute('honeypot_preset_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataAlicloudThreatDetectionHoneypotPresetsPresetsMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // preset_name - computed: true, optional: false, required: false
  public get presetName() {
    return this.getStringAttribute('preset_name');
  }
}

export class DataAlicloudThreatDetectionHoneypotPresetsPresetsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudThreatDetectionHoneypotPresetsPresetsOutputReference {
    return new DataAlicloudThreatDetectionHoneypotPresetsPresetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets alicloud_threat_detection_honeypot_presets}
*/
export class DataAlicloudThreatDetectionHoneypotPresets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_honeypot_presets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudThreatDetectionHoneypotPresets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudThreatDetectionHoneypotPresets to import
  * @param importFromId The id of the existing DataAlicloudThreatDetectionHoneypotPresets that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudThreatDetectionHoneypotPresets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_honeypot_presets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/threat_detection_honeypot_presets alicloud_threat_detection_honeypot_presets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudThreatDetectionHoneypotPresetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudThreatDetectionHoneypotPresetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_honeypot_presets',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._currentPage = config.currentPage;
    this._enableDetails = config.enableDetails;
    this._honeypotImageName = config.honeypotImageName;
    this._id = config.id;
    this._ids = config.ids;
    this._lang = config.lang;
    this._nodeId = config.nodeId;
    this._nodeName = config.nodeName;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._presetName = config.presetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_page - computed: false, optional: true, required: false
  private _currentPage?: number; 
  public get currentPage() {
    return this.getNumberAttribute('current_page');
  }
  public set currentPage(value: number) {
    this._currentPage = value;
  }
  public resetCurrentPage() {
    this._currentPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPageInput() {
    return this._currentPage;
  }

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
  }

  // honeypot_image_name - computed: false, optional: true, required: false
  private _honeypotImageName?: string; 
  public get honeypotImageName() {
    return this.getStringAttribute('honeypot_image_name');
  }
  public set honeypotImageName(value: string) {
    this._honeypotImageName = value;
  }
  public resetHoneypotImageName() {
    this._honeypotImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeypotImageNameInput() {
    return this._honeypotImageName;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // preset_name - computed: false, optional: true, required: false
  private _presetName?: string; 
  public get presetName() {
    return this.getStringAttribute('preset_name');
  }
  public set presetName(value: string) {
    this._presetName = value;
  }
  public resetPresetName() {
    this._presetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetNameInput() {
    return this._presetName;
  }

  // presets - computed: true, optional: false, required: false
  private _presets = new DataAlicloudThreatDetectionHoneypotPresetsPresetsList(this, "presets", false);
  public get presets() {
    return this._presets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      current_page: cdktf.numberToTerraform(this._currentPage),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      honeypot_image_name: cdktf.stringToTerraform(this._honeypotImageName),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      lang: cdktf.stringToTerraform(this._lang),
      node_id: cdktf.stringToTerraform(this._nodeId),
      node_name: cdktf.stringToTerraform(this._nodeName),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      preset_name: cdktf.stringToTerraform(this._presetName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      current_page: {
        value: cdktf.numberToHclTerraform(this._currentPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      honeypot_image_name: {
        value: cdktf.stringToHclTerraform(this._honeypotImageName),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preset_name: {
        value: cdktf.stringToHclTerraform(this._presetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
