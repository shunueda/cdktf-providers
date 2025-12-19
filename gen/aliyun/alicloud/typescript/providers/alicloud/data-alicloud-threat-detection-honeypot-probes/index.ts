// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudThreatDetectionHoneypotProbesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes#display_name DataAlicloudThreatDetectionHoneypotProbes#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes#enable_details DataAlicloudThreatDetectionHoneypotProbes#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes#id DataAlicloudThreatDetectionHoneypotProbes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes#ids DataAlicloudThreatDetectionHoneypotProbes#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes#name_regex DataAlicloudThreatDetectionHoneypotProbes#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes#output_file DataAlicloudThreatDetectionHoneypotProbes#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes#probe_status DataAlicloudThreatDetectionHoneypotProbes#probe_status}
  */
  readonly probeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes#probe_type DataAlicloudThreatDetectionHoneypotProbes#probe_type}
  */
  readonly probeType?: string;
}
export interface DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStruct {
}

export function dataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStructToTerraform(struct?: DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStructToHclTerraform(struct?: DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_port - computed: true, optional: false, required: false
  public get bindPort() {
    return this.getBooleanAttribute('bind_port');
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // fixed - computed: true, optional: false, required: false
  public get fixed() {
    return this.getBooleanAttribute('fixed');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }

  // target_port - computed: true, optional: false, required: false
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
}

export class DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStructOutputReference {
    return new DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStruct {
}

export function dataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStructToTerraform(struct?: DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStructToHclTerraform(struct?: DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_port_list - computed: true, optional: false, required: false
  private _bindPortList = new DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListBindPortListStructList(this, "bind_port_list", false);
  public get bindPortList() {
    return this._bindPortList;
  }

  // honeypot_id - computed: true, optional: false, required: false
  public get honeypotId() {
    return this.getStringAttribute('honeypot_id');
  }
}

export class DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStructOutputReference {
    return new DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudThreatDetectionHoneypotProbesProbes {
}

export function dataAlicloudThreatDetectionHoneypotProbesProbesToTerraform(struct?: DataAlicloudThreatDetectionHoneypotProbesProbes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudThreatDetectionHoneypotProbesProbesToHclTerraform(struct?: DataAlicloudThreatDetectionHoneypotProbesProbes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudThreatDetectionHoneypotProbesProbesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudThreatDetectionHoneypotProbesProbes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudThreatDetectionHoneypotProbesProbes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arp - computed: true, optional: false, required: false
  public get arp() {
    return this.getBooleanAttribute('arp');
  }

  // control_node_id - computed: true, optional: false, required: false
  public get controlNodeId() {
    return this.getStringAttribute('control_node_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // honeypot_bind_list - computed: true, optional: false, required: false
  private _honeypotBindList = new DataAlicloudThreatDetectionHoneypotProbesProbesHoneypotBindListStructList(this, "honeypot_bind_list", false);
  public get honeypotBindList() {
    return this._honeypotBindList;
  }

  // honeypot_probe_id - computed: true, optional: false, required: false
  public get honeypotProbeId() {
    return this.getStringAttribute('honeypot_probe_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ping - computed: true, optional: false, required: false
  public get ping() {
    return this.getBooleanAttribute('ping');
  }

  // probe_type - computed: true, optional: false, required: false
  public get probeType() {
    return this.getStringAttribute('probe_type');
  }

  // service_ip_list - computed: true, optional: false, required: false
  public get serviceIpList() {
    return this.getListAttribute('service_ip_list');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataAlicloudThreatDetectionHoneypotProbesProbesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudThreatDetectionHoneypotProbesProbesOutputReference {
    return new DataAlicloudThreatDetectionHoneypotProbesProbesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes alicloud_threat_detection_honeypot_probes}
*/
export class DataAlicloudThreatDetectionHoneypotProbes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_honeypot_probes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudThreatDetectionHoneypotProbes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudThreatDetectionHoneypotProbes to import
  * @param importFromId The id of the existing DataAlicloudThreatDetectionHoneypotProbes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudThreatDetectionHoneypotProbes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_honeypot_probes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/threat_detection_honeypot_probes alicloud_threat_detection_honeypot_probes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudThreatDetectionHoneypotProbesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudThreatDetectionHoneypotProbesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_honeypot_probes',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._probeStatus = config.probeStatus;
    this._probeType = config.probeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
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

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
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

  // probe_status - computed: false, optional: true, required: false
  private _probeStatus?: string; 
  public get probeStatus() {
    return this.getStringAttribute('probe_status');
  }
  public set probeStatus(value: string) {
    this._probeStatus = value;
  }
  public resetProbeStatus() {
    this._probeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeStatusInput() {
    return this._probeStatus;
  }

  // probe_type - computed: false, optional: true, required: false
  private _probeType?: string; 
  public get probeType() {
    return this.getStringAttribute('probe_type');
  }
  public set probeType(value: string) {
    this._probeType = value;
  }
  public resetProbeType() {
    this._probeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTypeInput() {
    return this._probeType;
  }

  // probes - computed: true, optional: false, required: false
  private _probes = new DataAlicloudThreatDetectionHoneypotProbesProbesList(this, "probes", false);
  public get probes() {
    return this._probes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      probe_status: cdktf.stringToTerraform(this._probeStatus),
      probe_type: cdktf.stringToTerraform(this._probeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      probe_status: {
        value: cdktf.stringToHclTerraform(this._probeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_type: {
        value: cdktf.stringToHclTerraform(this._probeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
