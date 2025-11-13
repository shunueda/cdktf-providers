// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtcServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enabling this option will auto-create a single read-only A/AAAA/CNAME record corresponding to the configured hostname and update it if the hostname changes.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#auto_create_host_record DtcServer#auto_create_host_record}
  */
  readonly autoCreateHostRecord?: boolean | cdktf.IResolvable;
  /**
  * Description of the Dtc server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#comment DtcServer#comment}
  */
  readonly comment?: string;
  /**
  * Determines if the zone is disabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#disable DtcServer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes of the  Dtc Server to be added/updated, as a map in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#ext_attrs DtcServer#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * The address or FQDN of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#host DtcServer#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#id DtcServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The DTC Server display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#name DtcServer#name}
  */
  readonly name: string;
  /**
  * The hostname for Server Name Indication (SNI) in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#sni_hostname DtcServer#sni_hostname}
  */
  readonly sniHostname?: string;
  /**
  * Use flag for: sni_hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#use_sni_hostname DtcServer#use_sni_hostname}
  */
  readonly useSniHostname?: boolean | cdktf.IResolvable;
  /**
  * monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#monitors DtcServer#monitors}
  */
  readonly monitors?: DtcServerMonitors[] | cdktf.IResolvable;
}
export interface DtcServerMonitors {
  /**
  * IP address or FQDN of the server used for monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#host DtcServer#host}
  */
  readonly host: string;
  /**
  * The monitor name related to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#monitor_name DtcServer#monitor_name}
  */
  readonly monitorName: string;
  /**
  * The monitor type related to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#monitor_type DtcServer#monitor_type}
  */
  readonly monitorType: string;
}

export function dtcServerMonitorsToTerraform(struct?: DtcServerMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    monitor_name: cdktf.stringToTerraform(struct!.monitorName),
    monitor_type: cdktf.stringToTerraform(struct!.monitorType),
  }
}


export function dtcServerMonitorsToHclTerraform(struct?: DtcServerMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_type: {
      value: cdktf.stringToHclTerraform(struct!.monitorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtcServerMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtcServerMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._monitorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorName = this._monitorName;
    }
    if (this._monitorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorType = this._monitorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcServerMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._monitorName = undefined;
      this._monitorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._monitorName = value.monitorName;
      this._monitorType = value.monitorType;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // monitor_type - computed: false, optional: false, required: true
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
  }
}

export class DtcServerMonitorsList extends cdktf.ComplexList {
  public internalValue? : DtcServerMonitors[] | cdktf.IResolvable

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
  public get(index: number): DtcServerMonitorsOutputReference {
    return new DtcServerMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server infoblox_dtc_server}
*/
export class DtcServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_dtc_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtcServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtcServer to import
  * @param importFromId The id of the existing DtcServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtcServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_dtc_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_server infoblox_dtc_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtcServerConfig
  */
  public constructor(scope: Construct, id: string, config: DtcServerConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_dtc_server',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0',
        providerVersionConstraint: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateHostRecord = config.autoCreateHostRecord;
    this._comment = config.comment;
    this._disable = config.disable;
    this._extAttrs = config.extAttrs;
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._sniHostname = config.sniHostname;
    this._useSniHostname = config.useSniHostname;
    this._monitors.internalValue = config.monitors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_host_record - computed: false, optional: true, required: false
  private _autoCreateHostRecord?: boolean | cdktf.IResolvable; 
  public get autoCreateHostRecord() {
    return this.getBooleanAttribute('auto_create_host_record');
  }
  public set autoCreateHostRecord(value: boolean | cdktf.IResolvable) {
    this._autoCreateHostRecord = value;
  }
  public resetAutoCreateHostRecord() {
    this._autoCreateHostRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateHostRecordInput() {
    return this._autoCreateHostRecord;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // ext_attrs - computed: false, optional: true, required: false
  private _extAttrs?: string; 
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }
  public set extAttrs(value: string) {
    this._extAttrs = value;
  }
  public resetExtAttrs() {
    this._extAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAttrsInput() {
    return this._extAttrs;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // sni_hostname - computed: false, optional: true, required: false
  private _sniHostname?: string; 
  public get sniHostname() {
    return this.getStringAttribute('sni_hostname');
  }
  public set sniHostname(value: string) {
    this._sniHostname = value;
  }
  public resetSniHostname() {
    this._sniHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniHostnameInput() {
    return this._sniHostname;
  }

  // use_sni_hostname - computed: false, optional: true, required: false
  private _useSniHostname?: boolean | cdktf.IResolvable; 
  public get useSniHostname() {
    return this.getBooleanAttribute('use_sni_hostname');
  }
  public set useSniHostname(value: boolean | cdktf.IResolvable) {
    this._useSniHostname = value;
  }
  public resetUseSniHostname() {
    this._useSniHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSniHostnameInput() {
    return this._useSniHostname;
  }

  // monitors - computed: false, optional: true, required: false
  private _monitors = new DtcServerMonitorsList(this, "monitors", false);
  public get monitors() {
    return this._monitors;
  }
  public putMonitors(value: DtcServerMonitors[] | cdktf.IResolvable) {
    this._monitors.internalValue = value;
  }
  public resetMonitors() {
    this._monitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_host_record: cdktf.booleanToTerraform(this._autoCreateHostRecord),
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sni_hostname: cdktf.stringToTerraform(this._sniHostname),
      use_sni_hostname: cdktf.booleanToTerraform(this._useSniHostname),
      monitors: cdktf.listMapper(dtcServerMonitorsToTerraform, true)(this._monitors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_host_record: {
        value: cdktf.booleanToHclTerraform(this._autoCreateHostRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      sni_hostname: {
        value: cdktf.stringToHclTerraform(this._sniHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_sni_hostname: {
        value: cdktf.booleanToHclTerraform(this._useSniHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitors: {
        value: cdktf.listMapperHcl(dtcServerMonitorsToHclTerraform, true)(this._monitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtcServerMonitorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
