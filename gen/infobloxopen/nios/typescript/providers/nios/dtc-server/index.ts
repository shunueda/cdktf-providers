// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtcServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enabling this option will auto-create a single read-only A/AAAA/CNAME record corresponding to the configured hostname and update it if the hostname changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#auto_create_host_record DtcServer#auto_create_host_record}
  */
  readonly autoCreateHostRecord?: boolean | cdktf.IResolvable;
  /**
  * Comment for the DTC Server; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#comment DtcServer#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether the DTC Server is disabled or not. When this is set to False, the fixed address is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#disable DtcServer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#extattrs DtcServer#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The address or FQDN of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#host DtcServer#host}
  */
  readonly host: string;
  /**
  * List of IP/FQDN and monitor pairs to be used for additional monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#monitors DtcServer#monitors}
  */
  readonly monitors?: DtcServerMonitors[] | cdktf.IResolvable;
  /**
  * The DTC Server display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#name DtcServer#name}
  */
  readonly name: string;
  /**
  * The hostname for Server Name Indication (SNI) in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#sni_hostname DtcServer#sni_hostname}
  */
  readonly sniHostname?: string;
  /**
  * Use flag for: sni_hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#use_sni_hostname DtcServer#use_sni_hostname}
  */
  readonly useSniHostname?: boolean | cdktf.IResolvable;
}
export interface DtcServerHealth {
}

export function dtcServerHealthToTerraform(struct?: DtcServerHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dtcServerHealthToHclTerraform(struct?: DtcServerHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DtcServerHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DtcServerHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcServerHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability - computed: true, optional: false, required: false
  public get availability() {
    return this.getStringAttribute('availability');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled_state - computed: true, optional: false, required: false
  public get enabledState() {
    return this.getStringAttribute('enabled_state');
  }
}
export interface DtcServerMonitors {
  /**
  * IP address or FQDN of the server used for monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#host DtcServer#host}
  */
  readonly host: string;
  /**
  * The monitor related to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#monitor DtcServer#monitor}
  */
  readonly monitor: string;
}

export function dtcServerMonitorsToTerraform(struct?: DtcServerMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    monitor: cdktf.stringToTerraform(struct!.monitor),
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
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
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
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcServerMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._monitor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._monitor = value.monitor;
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

  // monitor - computed: false, optional: false, required: true
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
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
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server nios_dtc_server}
*/
export class DtcServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dtc_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtcServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtcServer to import
  * @param importFromId The id of the existing DtcServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtcServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dtc_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_server nios_dtc_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtcServerConfig
  */
  public constructor(scope: Construct, id: string, config: DtcServerConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dtc_server',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
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
    this._extattrs = config.extattrs;
    this._host = config.host;
    this._monitors.internalValue = config.monitors;
    this._name = config.name;
    this._sniHostname = config.sniHostname;
    this._useSniHostname = config.useSniHostname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_host_record - computed: true, optional: true, required: false
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

  // comment - computed: true, optional: true, required: false
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

  // disable - computed: true, optional: true, required: false
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

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // health - computed: true, optional: false, required: false
  private _health = new DtcServerHealthOutputReference(this, "health");
  public get health() {
    return this._health;
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

  // sni_hostname - computed: true, optional: true, required: false
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

  // use_sni_hostname - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_host_record: cdktf.booleanToTerraform(this._autoCreateHostRecord),
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      host: cdktf.stringToTerraform(this._host),
      monitors: cdktf.listMapper(dtcServerMonitorsToTerraform, false)(this._monitors.internalValue),
      name: cdktf.stringToTerraform(this._name),
      sni_hostname: cdktf.stringToTerraform(this._sniHostname),
      use_sni_hostname: cdktf.booleanToTerraform(this._useSniHostname),
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
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitors: {
        value: cdktf.listMapperHcl(dtcServerMonitorsToHclTerraform, false)(this._monitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtcServerMonitorsList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
