// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GtmDatacenterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#city GtmDatacenter#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#clone_of GtmDatacenter#clone_of}
  */
  readonly cloneOf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#cloud_server_host_header_override GtmDatacenter#cloud_server_host_header_override}
  */
  readonly cloudServerHostHeaderOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#cloud_server_targeting GtmDatacenter#cloud_server_targeting}
  */
  readonly cloudServerTargeting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#continent GtmDatacenter#continent}
  */
  readonly continent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#country GtmDatacenter#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#domain GtmDatacenter#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#id GtmDatacenter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#latitude GtmDatacenter#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#longitude GtmDatacenter#longitude}
  */
  readonly longitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#nickname GtmDatacenter#nickname}
  */
  readonly nickname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#state_or_province GtmDatacenter#state_or_province}
  */
  readonly stateOrProvince?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#wait_on_complete GtmDatacenter#wait_on_complete}
  */
  readonly waitOnComplete?: boolean | cdktf.IResolvable;
  /**
  * default_load_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#default_load_object GtmDatacenter#default_load_object}
  */
  readonly defaultLoadObject?: GtmDatacenterDefaultLoadObject;
}
export interface GtmDatacenterDefaultLoadObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#load_object GtmDatacenter#load_object}
  */
  readonly loadObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#load_object_port GtmDatacenter#load_object_port}
  */
  readonly loadObjectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#load_servers GtmDatacenter#load_servers}
  */
  readonly loadServers?: string[];
}

export function gtmDatacenterDefaultLoadObjectToTerraform(struct?: GtmDatacenterDefaultLoadObjectOutputReference | GtmDatacenterDefaultLoadObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_object: cdktf.stringToTerraform(struct!.loadObject),
    load_object_port: cdktf.numberToTerraform(struct!.loadObjectPort),
    load_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadServers),
  }
}


export function gtmDatacenterDefaultLoadObjectToHclTerraform(struct?: GtmDatacenterDefaultLoadObjectOutputReference | GtmDatacenterDefaultLoadObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_object: {
      value: cdktf.stringToHclTerraform(struct!.loadObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_object_port: {
      value: cdktf.numberToHclTerraform(struct!.loadObjectPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GtmDatacenterDefaultLoadObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GtmDatacenterDefaultLoadObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadObject = this._loadObject;
    }
    if (this._loadObjectPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadObjectPort = this._loadObjectPort;
    }
    if (this._loadServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadServers = this._loadServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GtmDatacenterDefaultLoadObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadObject = undefined;
      this._loadObjectPort = undefined;
      this._loadServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadObject = value.loadObject;
      this._loadObjectPort = value.loadObjectPort;
      this._loadServers = value.loadServers;
    }
  }

  // load_object - computed: false, optional: true, required: false
  private _loadObject?: string; 
  public get loadObject() {
    return this.getStringAttribute('load_object');
  }
  public set loadObject(value: string) {
    this._loadObject = value;
  }
  public resetLoadObject() {
    this._loadObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadObjectInput() {
    return this._loadObject;
  }

  // load_object_port - computed: false, optional: true, required: false
  private _loadObjectPort?: number; 
  public get loadObjectPort() {
    return this.getNumberAttribute('load_object_port');
  }
  public set loadObjectPort(value: number) {
    this._loadObjectPort = value;
  }
  public resetLoadObjectPort() {
    this._loadObjectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadObjectPortInput() {
    return this._loadObjectPort;
  }

  // load_servers - computed: false, optional: true, required: false
  private _loadServers?: string[]; 
  public get loadServers() {
    return this.getListAttribute('load_servers');
  }
  public set loadServers(value: string[]) {
    this._loadServers = value;
  }
  public resetLoadServers() {
    this._loadServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadServersInput() {
    return this._loadServers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter akamai_gtm_datacenter}
*/
export class GtmDatacenter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_datacenter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GtmDatacenter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GtmDatacenter to import
  * @param importFromId The id of the existing GtmDatacenter that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GtmDatacenter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_datacenter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_datacenter akamai_gtm_datacenter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GtmDatacenterConfig
  */
  public constructor(scope: Construct, id: string, config: GtmDatacenterConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_datacenter',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._city = config.city;
    this._cloneOf = config.cloneOf;
    this._cloudServerHostHeaderOverride = config.cloudServerHostHeaderOverride;
    this._cloudServerTargeting = config.cloudServerTargeting;
    this._continent = config.continent;
    this._country = config.country;
    this._domain = config.domain;
    this._id = config.id;
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._nickname = config.nickname;
    this._stateOrProvince = config.stateOrProvince;
    this._waitOnComplete = config.waitOnComplete;
    this._defaultLoadObject.internalValue = config.defaultLoadObject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // clone_of - computed: false, optional: true, required: false
  private _cloneOf?: number; 
  public get cloneOf() {
    return this.getNumberAttribute('clone_of');
  }
  public set cloneOf(value: number) {
    this._cloneOf = value;
  }
  public resetCloneOf() {
    this._cloneOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneOfInput() {
    return this._cloneOf;
  }

  // cloud_server_host_header_override - computed: false, optional: true, required: false
  private _cloudServerHostHeaderOverride?: boolean | cdktf.IResolvable; 
  public get cloudServerHostHeaderOverride() {
    return this.getBooleanAttribute('cloud_server_host_header_override');
  }
  public set cloudServerHostHeaderOverride(value: boolean | cdktf.IResolvable) {
    this._cloudServerHostHeaderOverride = value;
  }
  public resetCloudServerHostHeaderOverride() {
    this._cloudServerHostHeaderOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServerHostHeaderOverrideInput() {
    return this._cloudServerHostHeaderOverride;
  }

  // cloud_server_targeting - computed: false, optional: true, required: false
  private _cloudServerTargeting?: boolean | cdktf.IResolvable; 
  public get cloudServerTargeting() {
    return this.getBooleanAttribute('cloud_server_targeting');
  }
  public set cloudServerTargeting(value: boolean | cdktf.IResolvable) {
    this._cloudServerTargeting = value;
  }
  public resetCloudServerTargeting() {
    this._cloudServerTargeting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServerTargetingInput() {
    return this._cloudServerTargeting;
  }

  // continent - computed: false, optional: true, required: false
  private _continent?: string; 
  public get continent() {
    return this.getStringAttribute('continent');
  }
  public set continent(value: string) {
    this._continent = value;
  }
  public resetContinent() {
    this._continent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentInput() {
    return this._continent;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // nickname - computed: false, optional: true, required: false
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  public resetNickname() {
    this._nickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }

  // ping_interval - computed: true, optional: false, required: false
  public get pingInterval() {
    return this.getNumberAttribute('ping_interval');
  }

  // ping_packet_size - computed: true, optional: false, required: false
  public get pingPacketSize() {
    return this.getNumberAttribute('ping_packet_size');
  }

  // score_penalty - computed: true, optional: false, required: false
  public get scorePenalty() {
    return this.getNumberAttribute('score_penalty');
  }

  // servermonitor_liveness_count - computed: true, optional: false, required: false
  public get servermonitorLivenessCount() {
    return this.getNumberAttribute('servermonitor_liveness_count');
  }

  // servermonitor_load_count - computed: true, optional: false, required: false
  public get servermonitorLoadCount() {
    return this.getNumberAttribute('servermonitor_load_count');
  }

  // servermonitor_pool - computed: true, optional: false, required: false
  public get servermonitorPool() {
    return this.getStringAttribute('servermonitor_pool');
  }

  // state_or_province - computed: false, optional: true, required: false
  private _stateOrProvince?: string; 
  public get stateOrProvince() {
    return this.getStringAttribute('state_or_province');
  }
  public set stateOrProvince(value: string) {
    this._stateOrProvince = value;
  }
  public resetStateOrProvince() {
    this._stateOrProvince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateOrProvinceInput() {
    return this._stateOrProvince;
  }

  // virtual - computed: true, optional: false, required: false
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }

  // wait_on_complete - computed: false, optional: true, required: false
  private _waitOnComplete?: boolean | cdktf.IResolvable; 
  public get waitOnComplete() {
    return this.getBooleanAttribute('wait_on_complete');
  }
  public set waitOnComplete(value: boolean | cdktf.IResolvable) {
    this._waitOnComplete = value;
  }
  public resetWaitOnComplete() {
    this._waitOnComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitOnCompleteInput() {
    return this._waitOnComplete;
  }

  // default_load_object - computed: false, optional: true, required: false
  private _defaultLoadObject = new GtmDatacenterDefaultLoadObjectOutputReference(this, "default_load_object");
  public get defaultLoadObject() {
    return this._defaultLoadObject;
  }
  public putDefaultLoadObject(value: GtmDatacenterDefaultLoadObject) {
    this._defaultLoadObject.internalValue = value;
  }
  public resetDefaultLoadObject() {
    this._defaultLoadObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoadObjectInput() {
    return this._defaultLoadObject.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      city: cdktf.stringToTerraform(this._city),
      clone_of: cdktf.numberToTerraform(this._cloneOf),
      cloud_server_host_header_override: cdktf.booleanToTerraform(this._cloudServerHostHeaderOverride),
      cloud_server_targeting: cdktf.booleanToTerraform(this._cloudServerTargeting),
      continent: cdktf.stringToTerraform(this._continent),
      country: cdktf.stringToTerraform(this._country),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      nickname: cdktf.stringToTerraform(this._nickname),
      state_or_province: cdktf.stringToTerraform(this._stateOrProvince),
      wait_on_complete: cdktf.booleanToTerraform(this._waitOnComplete),
      default_load_object: gtmDatacenterDefaultLoadObjectToTerraform(this._defaultLoadObject.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone_of: {
        value: cdktf.numberToHclTerraform(this._cloneOf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud_server_host_header_override: {
        value: cdktf.booleanToHclTerraform(this._cloudServerHostHeaderOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_server_targeting: {
        value: cdktf.booleanToHclTerraform(this._cloudServerTargeting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      continent: {
        value: cdktf.stringToHclTerraform(this._continent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      latitude: {
        value: cdktf.numberToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      longitude: {
        value: cdktf.numberToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nickname: {
        value: cdktf.stringToHclTerraform(this._nickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_or_province: {
        value: cdktf.stringToHclTerraform(this._stateOrProvince),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_on_complete: {
        value: cdktf.booleanToHclTerraform(this._waitOnComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_load_object: {
        value: gtmDatacenterDefaultLoadObjectToHclTerraform(this._defaultLoadObject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GtmDatacenterDefaultLoadObjectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
