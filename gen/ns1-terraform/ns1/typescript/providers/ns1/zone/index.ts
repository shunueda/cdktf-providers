// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#additional_networks Zone#additional_networks}
  */
  readonly additionalNetworks?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#additional_notify_only Zone#additional_notify_only}
  */
  readonly additionalNotifyOnly?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#additional_ports Zone#additional_ports}
  */
  readonly additionalPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#additional_primaries Zone#additional_primaries}
  */
  readonly additionalPrimaries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#autogenerate_ns_record Zone#autogenerate_ns_record}
  */
  readonly autogenerateNsRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#dnssec Zone#dnssec}
  */
  readonly dnssec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#expiry Zone#expiry}
  */
  readonly expiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#hostmaster Zone#hostmaster}
  */
  readonly hostmaster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#id Zone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#link Zone#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#networks Zone#networks}
  */
  readonly networks?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#nx_ttl Zone#nx_ttl}
  */
  readonly nxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#primary Zone#primary}
  */
  readonly primary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#primary_network Zone#primary_network}
  */
  readonly primaryNetwork?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#primary_port Zone#primary_port}
  */
  readonly primaryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#refresh Zone#refresh}
  */
  readonly refresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#retry Zone#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#tags Zone#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#tsig Zone#tsig}
  */
  readonly tsig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#ttl Zone#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#zone Zone#zone}
  */
  readonly zone: string;
  /**
  * secondaries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#secondaries Zone#secondaries}
  */
  readonly secondaries?: ZoneSecondaries[] | cdktf.IResolvable;
}
export interface ZoneSecondaries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#ip Zone#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#notify Zone#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#port Zone#port}
  */
  readonly port?: number;
}

export function zoneSecondariesToTerraform(struct?: ZoneSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    notify: cdktf.booleanToTerraform(struct!.notify),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function zoneSecondariesToHclTerraform(struct?: ZoneSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify: {
      value: cdktf.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneSecondaries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSecondaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._notify = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._notify = value.notify;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('networks')));
  }

  // notify - computed: true, optional: true, required: false
  private _notify?: boolean | cdktf.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktf.IResolvable) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class ZoneSecondariesList extends cdktf.ComplexList {
  public internalValue? : ZoneSecondaries[] | cdktf.IResolvable

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
  public get(index: number): ZoneSecondariesOutputReference {
    return new ZoneSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone ns1_zone}
*/
export class Zone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Zone to import
  * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Zone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/zone ns1_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_zone',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.3',
        providerVersionConstraint: '2.7.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalNetworks = config.additionalNetworks;
    this._additionalNotifyOnly = config.additionalNotifyOnly;
    this._additionalPorts = config.additionalPorts;
    this._additionalPrimaries = config.additionalPrimaries;
    this._autogenerateNsRecord = config.autogenerateNsRecord;
    this._dnssec = config.dnssec;
    this._expiry = config.expiry;
    this._hostmaster = config.hostmaster;
    this._id = config.id;
    this._link = config.link;
    this._networks = config.networks;
    this._nxTtl = config.nxTtl;
    this._primary = config.primary;
    this._primaryNetwork = config.primaryNetwork;
    this._primaryPort = config.primaryPort;
    this._refresh = config.refresh;
    this._retry = config.retry;
    this._tags = config.tags;
    this._tsig = config.tsig;
    this._ttl = config.ttl;
    this._zone = config.zone;
    this._secondaries.internalValue = config.secondaries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_networks - computed: false, optional: true, required: false
  private _additionalNetworks?: number[]; 
  public get additionalNetworks() {
    return this.getNumberListAttribute('additional_networks');
  }
  public set additionalNetworks(value: number[]) {
    this._additionalNetworks = value;
  }
  public resetAdditionalNetworks() {
    this._additionalNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalNetworksInput() {
    return this._additionalNetworks;
  }

  // additional_notify_only - computed: false, optional: true, required: false
  private _additionalNotifyOnly?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable; 
  public get additionalNotifyOnly() {
    return this.interpolationForAttribute('additional_notify_only');
  }
  public set additionalNotifyOnly(value: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable) {
    this._additionalNotifyOnly = value;
  }
  public resetAdditionalNotifyOnly() {
    this._additionalNotifyOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalNotifyOnlyInput() {
    return this._additionalNotifyOnly;
  }

  // additional_ports - computed: false, optional: true, required: false
  private _additionalPorts?: number[]; 
  public get additionalPorts() {
    return this.getNumberListAttribute('additional_ports');
  }
  public set additionalPorts(value: number[]) {
    this._additionalPorts = value;
  }
  public resetAdditionalPorts() {
    this._additionalPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPortsInput() {
    return this._additionalPorts;
  }

  // additional_primaries - computed: false, optional: true, required: false
  private _additionalPrimaries?: string[]; 
  public get additionalPrimaries() {
    return this.getListAttribute('additional_primaries');
  }
  public set additionalPrimaries(value: string[]) {
    this._additionalPrimaries = value;
  }
  public resetAdditionalPrimaries() {
    this._additionalPrimaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPrimariesInput() {
    return this._additionalPrimaries;
  }

  // autogenerate_ns_record - computed: false, optional: true, required: false
  private _autogenerateNsRecord?: boolean | cdktf.IResolvable; 
  public get autogenerateNsRecord() {
    return this.getBooleanAttribute('autogenerate_ns_record');
  }
  public set autogenerateNsRecord(value: boolean | cdktf.IResolvable) {
    this._autogenerateNsRecord = value;
  }
  public resetAutogenerateNsRecord() {
    this._autogenerateNsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogenerateNsRecordInput() {
    return this._autogenerateNsRecord;
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getStringAttribute('dns_servers');
  }

  // dnssec - computed: true, optional: true, required: false
  private _dnssec?: boolean | cdktf.IResolvable; 
  public get dnssec() {
    return this.getBooleanAttribute('dnssec');
  }
  public set dnssec(value: boolean | cdktf.IResolvable) {
    this._dnssec = value;
  }
  public resetDnssec() {
    this._dnssec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecInput() {
    return this._dnssec;
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // hostmaster - computed: true, optional: true, required: false
  private _hostmaster?: string; 
  public get hostmaster() {
    return this.getStringAttribute('hostmaster');
  }
  public set hostmaster(value: string) {
    this._hostmaster = value;
  }
  public resetHostmaster() {
    this._hostmaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostmasterInput() {
    return this._hostmaster;
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

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // networks - computed: true, optional: true, required: false
  private _networks?: number[]; 
  public get networks() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('networks')));
  }
  public set networks(value: number[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // nx_ttl - computed: true, optional: true, required: false
  private _nxTtl?: number; 
  public get nxTtl() {
    return this.getNumberAttribute('nx_ttl');
  }
  public set nxTtl(value: number) {
    this._nxTtl = value;
  }
  public resetNxTtl() {
    this._nxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxTtlInput() {
    return this._nxTtl;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // primary_network - computed: false, optional: true, required: false
  private _primaryNetwork?: number; 
  public get primaryNetwork() {
    return this.getNumberAttribute('primary_network');
  }
  public set primaryNetwork(value: number) {
    this._primaryNetwork = value;
  }
  public resetPrimaryNetwork() {
    this._primaryNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNetworkInput() {
    return this._primaryNetwork;
  }

  // primary_port - computed: true, optional: true, required: false
  private _primaryPort?: number; 
  public get primaryPort() {
    return this.getNumberAttribute('primary_port');
  }
  public set primaryPort(value: number) {
    this._primaryPort = value;
  }
  public resetPrimaryPort() {
    this._primaryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPortInput() {
    return this._primaryPort;
  }

  // refresh - computed: true, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tsig - computed: false, optional: true, required: false
  private _tsig?: { [key: string]: string }; 
  public get tsig() {
    return this.getStringMapAttribute('tsig');
  }
  public set tsig(value: { [key: string]: string }) {
    this._tsig = value;
  }
  public resetTsig() {
    this._tsig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigInput() {
    return this._tsig;
  }

  // ttl - computed: true, optional: true, required: false
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // secondaries - computed: false, optional: true, required: false
  private _secondaries = new ZoneSecondariesList(this, "secondaries", true);
  public get secondaries() {
    return this._secondaries;
  }
  public putSecondaries(value: ZoneSecondaries[] | cdktf.IResolvable) {
    this._secondaries.internalValue = value;
  }
  public resetSecondaries() {
    this._secondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondariesInput() {
    return this._secondaries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_networks: cdktf.listMapper(cdktf.numberToTerraform, false)(this._additionalNetworks),
      additional_notify_only: cdktf.listMapper(cdktf.booleanToTerraform, false)(this._additionalNotifyOnly),
      additional_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._additionalPorts),
      additional_primaries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalPrimaries),
      autogenerate_ns_record: cdktf.booleanToTerraform(this._autogenerateNsRecord),
      dnssec: cdktf.booleanToTerraform(this._dnssec),
      expiry: cdktf.numberToTerraform(this._expiry),
      hostmaster: cdktf.stringToTerraform(this._hostmaster),
      id: cdktf.stringToTerraform(this._id),
      link: cdktf.stringToTerraform(this._link),
      networks: cdktf.listMapper(cdktf.numberToTerraform, false)(this._networks),
      nx_ttl: cdktf.numberToTerraform(this._nxTtl),
      primary: cdktf.stringToTerraform(this._primary),
      primary_network: cdktf.numberToTerraform(this._primaryNetwork),
      primary_port: cdktf.numberToTerraform(this._primaryPort),
      refresh: cdktf.numberToTerraform(this._refresh),
      retry: cdktf.numberToTerraform(this._retry),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tsig: cdktf.hashMapper(cdktf.stringToTerraform)(this._tsig),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone: cdktf.stringToTerraform(this._zone),
      secondaries: cdktf.listMapper(zoneSecondariesToTerraform, true)(this._secondaries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_networks: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._additionalNetworks),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      additional_notify_only: {
        value: cdktf.listMapperHcl(cdktf.booleanToHclTerraform, false)(this._additionalNotifyOnly),
        isBlock: false,
        type: "list",
        storageClassType: "booleanList",
      },
      additional_ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._additionalPorts),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      additional_primaries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalPrimaries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      autogenerate_ns_record: {
        value: cdktf.booleanToHclTerraform(this._autogenerateNsRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dnssec: {
        value: cdktf.booleanToHclTerraform(this._dnssec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiry: {
        value: cdktf.numberToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostmaster: {
        value: cdktf.stringToHclTerraform(this._hostmaster),
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
      link: {
        value: cdktf.stringToHclTerraform(this._link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._networks),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      nx_ttl: {
        value: cdktf.numberToHclTerraform(this._nxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary: {
        value: cdktf.stringToHclTerraform(this._primary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_network: {
        value: cdktf.numberToHclTerraform(this._primaryNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_port: {
        value: cdktf.numberToHclTerraform(this._primaryPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh: {
        value: cdktf.numberToHclTerraform(this._refresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tsig: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tsig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondaries: {
        value: cdktf.listMapperHcl(zoneSecondariesToHclTerraform, true)(this._secondaries.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ZoneSecondariesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
