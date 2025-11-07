// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Interval to age runtime statistics. 0: never age, default is 10 (Time, unit: sec, default is 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#age_interval GslbSystem#age_interval}
  */
  readonly ageInterval?: number;
  /**
  * Load built-in IANA table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#geo_location_iana GslbSystem#geo_location_iana}
  */
  readonly geoLocationIana?: number;
  /**
  * GSLB Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#gslb_group GslbSystem#gslb_group}
  */
  readonly gslbGroup?: number;
  /**
  * GSLB Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#gslb_service_ip GslbSystem#gslb_service_ip}
  */
  readonly gslbServiceIp?: number;
  /**
  * GSLB Site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#gslb_site GslbSystem#gslb_site}
  */
  readonly gslbSite?: number;
  /**
  * System's Network Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#hostname GslbSystem#hostname}
  */
  readonly hostname?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#id GslbSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TTL of IP packets, default is 0 (IP TTL value, default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#ip_ttl GslbSystem#ip_ttl}
  */
  readonly ipTtl?: number;
  /**
  * Specify Auto Map Module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#module GslbSystem#module}
  */
  readonly module?: number;
  /**
  * SLB Device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#slb_device GslbSystem#slb_device}
  */
  readonly slbDevice?: number;
  /**
  * SLB Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#slb_server GslbSystem#slb_server}
  */
  readonly slbServer?: number;
  /**
  * SLB Virtual Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#slb_virtual_server GslbSystem#slb_virtual_server}
  */
  readonly slbVirtualServer?: number;
  /**
  * Specify Auto Map TTL (TTL, default is 300)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#ttl GslbSystem#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#uuid GslbSystem#uuid}
  */
  readonly uuid?: string;
  /**
  * Disable GSLB until timeout if system is not ready (Time, unit: sec, default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#wait GslbSystem#wait}
  */
  readonly wait?: number;
  /**
  * gslb_load_file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#gslb_load_file_list GslbSystem#gslb_load_file_list}
  */
  readonly gslbLoadFileList?: GslbSystemGslbLoadFileListStruct[] | cdktf.IResolvable;
}
export interface GslbSystemGslbLoadFileListStruct {
  /**
  * Specify file to be loaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#geo_location_load_filename GslbSystem#geo_location_load_filename}
  */
  readonly geoLocationLoadFilename?: string;
  /**
  * CSV template to load this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#template_name GslbSystem#template_name}
  */
  readonly templateName?: string;
}

export function gslbSystemGslbLoadFileListStructToTerraform(struct?: GslbSystemGslbLoadFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_location_load_filename: cdktf.stringToTerraform(struct!.geoLocationLoadFilename),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function gslbSystemGslbLoadFileListStructToHclTerraform(struct?: GslbSystemGslbLoadFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_location_load_filename: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationLoadFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSystemGslbLoadFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSystemGslbLoadFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocationLoadFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationLoadFilename = this._geoLocationLoadFilename;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSystemGslbLoadFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoLocationLoadFilename = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoLocationLoadFilename = value.geoLocationLoadFilename;
      this._templateName = value.templateName;
    }
  }

  // geo_location_load_filename - computed: false, optional: true, required: false
  private _geoLocationLoadFilename?: string; 
  public get geoLocationLoadFilename() {
    return this.getStringAttribute('geo_location_load_filename');
  }
  public set geoLocationLoadFilename(value: string) {
    this._geoLocationLoadFilename = value;
  }
  public resetGeoLocationLoadFilename() {
    this._geoLocationLoadFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationLoadFilenameInput() {
    return this._geoLocationLoadFilename;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class GslbSystemGslbLoadFileListStructList extends cdktf.ComplexList {
  public internalValue? : GslbSystemGslbLoadFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbSystemGslbLoadFileListStructOutputReference {
    return new GslbSystemGslbLoadFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system thunder_gslb_system}
*/
export class GslbSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbSystem to import
  * @param importFromId The id of the existing GslbSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_system thunder_gslb_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GslbSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_system',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ageInterval = config.ageInterval;
    this._geoLocationIana = config.geoLocationIana;
    this._gslbGroup = config.gslbGroup;
    this._gslbServiceIp = config.gslbServiceIp;
    this._gslbSite = config.gslbSite;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ipTtl = config.ipTtl;
    this._module = config.module;
    this._slbDevice = config.slbDevice;
    this._slbServer = config.slbServer;
    this._slbVirtualServer = config.slbVirtualServer;
    this._ttl = config.ttl;
    this._uuid = config.uuid;
    this._wait = config.wait;
    this._gslbLoadFileList.internalValue = config.gslbLoadFileList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // age_interval - computed: false, optional: true, required: false
  private _ageInterval?: number; 
  public get ageInterval() {
    return this.getNumberAttribute('age_interval');
  }
  public set ageInterval(value: number) {
    this._ageInterval = value;
  }
  public resetAgeInterval() {
    this._ageInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageIntervalInput() {
    return this._ageInterval;
  }

  // geo_location_iana - computed: false, optional: true, required: false
  private _geoLocationIana?: number; 
  public get geoLocationIana() {
    return this.getNumberAttribute('geo_location_iana');
  }
  public set geoLocationIana(value: number) {
    this._geoLocationIana = value;
  }
  public resetGeoLocationIana() {
    this._geoLocationIana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationIanaInput() {
    return this._geoLocationIana;
  }

  // gslb_group - computed: false, optional: true, required: false
  private _gslbGroup?: number; 
  public get gslbGroup() {
    return this.getNumberAttribute('gslb_group');
  }
  public set gslbGroup(value: number) {
    this._gslbGroup = value;
  }
  public resetGslbGroup() {
    this._gslbGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGroupInput() {
    return this._gslbGroup;
  }

  // gslb_service_ip - computed: false, optional: true, required: false
  private _gslbServiceIp?: number; 
  public get gslbServiceIp() {
    return this.getNumberAttribute('gslb_service_ip');
  }
  public set gslbServiceIp(value: number) {
    this._gslbServiceIp = value;
  }
  public resetGslbServiceIp() {
    this._gslbServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpInput() {
    return this._gslbServiceIp;
  }

  // gslb_site - computed: false, optional: true, required: false
  private _gslbSite?: number; 
  public get gslbSite() {
    return this.getNumberAttribute('gslb_site');
  }
  public set gslbSite(value: number) {
    this._gslbSite = value;
  }
  public resetGslbSite() {
    this._gslbSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteInput() {
    return this._gslbSite;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: number; 
  public get hostname() {
    return this.getNumberAttribute('hostname');
  }
  public set hostname(value: number) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ip_ttl - computed: false, optional: true, required: false
  private _ipTtl?: number; 
  public get ipTtl() {
    return this.getNumberAttribute('ip_ttl');
  }
  public set ipTtl(value: number) {
    this._ipTtl = value;
  }
  public resetIpTtl() {
    this._ipTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTtlInput() {
    return this._ipTtl;
  }

  // module - computed: false, optional: true, required: false
  private _module?: number; 
  public get module() {
    return this.getNumberAttribute('module');
  }
  public set module(value: number) {
    this._module = value;
  }
  public resetModule() {
    this._module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // slb_device - computed: false, optional: true, required: false
  private _slbDevice?: number; 
  public get slbDevice() {
    return this.getNumberAttribute('slb_device');
  }
  public set slbDevice(value: number) {
    this._slbDevice = value;
  }
  public resetSlbDevice() {
    this._slbDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDeviceInput() {
    return this._slbDevice;
  }

  // slb_server - computed: false, optional: true, required: false
  private _slbServer?: number; 
  public get slbServer() {
    return this.getNumberAttribute('slb_server');
  }
  public set slbServer(value: number) {
    this._slbServer = value;
  }
  public resetSlbServer() {
    this._slbServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbServerInput() {
    return this._slbServer;
  }

  // slb_virtual_server - computed: false, optional: true, required: false
  private _slbVirtualServer?: number; 
  public get slbVirtualServer() {
    return this.getNumberAttribute('slb_virtual_server');
  }
  public set slbVirtualServer(value: number) {
    this._slbVirtualServer = value;
  }
  public resetSlbVirtualServer() {
    this._slbVirtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbVirtualServerInput() {
    return this._slbVirtualServer;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // gslb_load_file_list - computed: false, optional: true, required: false
  private _gslbLoadFileList = new GslbSystemGslbLoadFileListStructList(this, "gslb_load_file_list", false);
  public get gslbLoadFileList() {
    return this._gslbLoadFileList;
  }
  public putGslbLoadFileList(value: GslbSystemGslbLoadFileListStruct[] | cdktf.IResolvable) {
    this._gslbLoadFileList.internalValue = value;
  }
  public resetGslbLoadFileList() {
    this._gslbLoadFileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbLoadFileListInput() {
    return this._gslbLoadFileList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      age_interval: cdktf.numberToTerraform(this._ageInterval),
      geo_location_iana: cdktf.numberToTerraform(this._geoLocationIana),
      gslb_group: cdktf.numberToTerraform(this._gslbGroup),
      gslb_service_ip: cdktf.numberToTerraform(this._gslbServiceIp),
      gslb_site: cdktf.numberToTerraform(this._gslbSite),
      hostname: cdktf.numberToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ip_ttl: cdktf.numberToTerraform(this._ipTtl),
      module: cdktf.numberToTerraform(this._module),
      slb_device: cdktf.numberToTerraform(this._slbDevice),
      slb_server: cdktf.numberToTerraform(this._slbServer),
      slb_virtual_server: cdktf.numberToTerraform(this._slbVirtualServer),
      ttl: cdktf.numberToTerraform(this._ttl),
      uuid: cdktf.stringToTerraform(this._uuid),
      wait: cdktf.numberToTerraform(this._wait),
      gslb_load_file_list: cdktf.listMapper(gslbSystemGslbLoadFileListStructToTerraform, true)(this._gslbLoadFileList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      age_interval: {
        value: cdktf.numberToHclTerraform(this._ageInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_location_iana: {
        value: cdktf.numberToHclTerraform(this._geoLocationIana),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_group: {
        value: cdktf.numberToHclTerraform(this._gslbGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_service_ip: {
        value: cdktf.numberToHclTerraform(this._gslbServiceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_site: {
        value: cdktf.numberToHclTerraform(this._gslbSite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostname: {
        value: cdktf.numberToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ttl: {
        value: cdktf.numberToHclTerraform(this._ipTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      module: {
        value: cdktf.numberToHclTerraform(this._module),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb_device: {
        value: cdktf.numberToHclTerraform(this._slbDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb_server: {
        value: cdktf.numberToHclTerraform(this._slbServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb_virtual_server: {
        value: cdktf.numberToHclTerraform(this._slbVirtualServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait: {
        value: cdktf.numberToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_load_file_list: {
        value: cdktf.listMapperHcl(gslbSystemGslbLoadFileListStructToHclTerraform, true)(this._gslbLoadFileList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbSystemGslbLoadFileListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
