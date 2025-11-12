// https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsForwarderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#display_name DnsForwarder#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#domains DnsForwarder#domains}
  */
  readonly domains: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#id DnsForwarder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#environment DnsForwarder#environment}
  */
  readonly environment: DnsForwarderEnvironment;
  /**
  * forward_via_gcp_dns_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#forward_via_gcp_dns_zones DnsForwarder#forward_via_gcp_dns_zones}
  */
  readonly forwardViaGcpDnsZones?: DnsForwarderForwardViaGcpDnsZones;
  /**
  * forward_via_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#forward_via_ip DnsForwarder#forward_via_ip}
  */
  readonly forwardViaIp?: DnsForwarderForwardViaIp;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#gateway DnsForwarder#gateway}
  */
  readonly gateway: DnsForwarderGateway;
}
export interface DnsForwarderEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#id DnsForwarder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dnsForwarderEnvironmentToTerraform(struct?: DnsForwarderEnvironmentOutputReference | DnsForwarderEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dnsForwarderEnvironmentToHclTerraform(struct?: DnsForwarderEnvironmentOutputReference | DnsForwarderEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DnsForwarderEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsForwarderEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsForwarderEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DnsForwarderForwardViaGcpDnsZones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#domain_mappings DnsForwarder#domain_mappings}
  */
  readonly domainMappings?: { [key: string]: string };
}

export function dnsForwarderForwardViaGcpDnsZonesToTerraform(struct?: DnsForwarderForwardViaGcpDnsZonesOutputReference | DnsForwarderForwardViaGcpDnsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.domainMappings),
  }
}


export function dnsForwarderForwardViaGcpDnsZonesToHclTerraform(struct?: DnsForwarderForwardViaGcpDnsZonesOutputReference | DnsForwarderForwardViaGcpDnsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_mappings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.domainMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsForwarderForwardViaGcpDnsZonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsForwarderForwardViaGcpDnsZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMappings = this._domainMappings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsForwarderForwardViaGcpDnsZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainMappings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainMappings = value.domainMappings;
    }
  }

  // domain_mappings - computed: true, optional: true, required: false
  private _domainMappings?: { [key: string]: string }; 
  public get domainMappings() {
    return this.getStringMapAttribute('domain_mappings');
  }
  public set domainMappings(value: { [key: string]: string }) {
    this._domainMappings = value;
  }
  public resetDomainMappings() {
    this._domainMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMappingsInput() {
    return this._domainMappings;
  }
}
export interface DnsForwarderForwardViaIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#dns_server_ips DnsForwarder#dns_server_ips}
  */
  readonly dnsServerIps?: string[];
}

export function dnsForwarderForwardViaIpToTerraform(struct?: DnsForwarderForwardViaIpOutputReference | DnsForwarderForwardViaIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerIps),
  }
}


export function dnsForwarderForwardViaIpToHclTerraform(struct?: DnsForwarderForwardViaIpOutputReference | DnsForwarderForwardViaIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServerIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsForwarderForwardViaIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsForwarderForwardViaIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServerIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerIps = this._dnsServerIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsForwarderForwardViaIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServerIps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServerIps = value.dnsServerIps;
    }
  }

  // dns_server_ips - computed: true, optional: true, required: false
  private _dnsServerIps?: string[]; 
  public get dnsServerIps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_server_ips'));
  }
  public set dnsServerIps(value: string[]) {
    this._dnsServerIps = value;
  }
  public resetDnsServerIps() {
    this._dnsServerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpsInput() {
    return this._dnsServerIps;
  }
}
export interface DnsForwarderGateway {
  /**
  * The unique identifier for the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#id DnsForwarder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dnsForwarderGatewayToTerraform(struct?: DnsForwarderGatewayOutputReference | DnsForwarderGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dnsForwarderGatewayToHclTerraform(struct?: DnsForwarderGatewayOutputReference | DnsForwarderGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DnsForwarderGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsForwarderGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsForwarderGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder confluent_dns_forwarder}
*/
export class DnsForwarder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_dns_forwarder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsForwarder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsForwarder to import
  * @param importFromId The id of the existing DnsForwarder that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsForwarder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_dns_forwarder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/dns_forwarder confluent_dns_forwarder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsForwarderConfig
  */
  public constructor(scope: Construct, id: string, config: DnsForwarderConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_dns_forwarder',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.51.0',
        providerVersionConstraint: '2.51.0'
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
    this._domains = config.domains;
    this._id = config.id;
    this._environment.internalValue = config.environment;
    this._forwardViaGcpDnsZones.internalValue = config.forwardViaGcpDnsZones;
    this._forwardViaIp.internalValue = config.forwardViaIp;
    this._gateway.internalValue = config.gateway;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
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

  // environment - computed: false, optional: false, required: true
  private _environment = new DnsForwarderEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DnsForwarderEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // forward_via_gcp_dns_zones - computed: false, optional: true, required: false
  private _forwardViaGcpDnsZones = new DnsForwarderForwardViaGcpDnsZonesOutputReference(this, "forward_via_gcp_dns_zones");
  public get forwardViaGcpDnsZones() {
    return this._forwardViaGcpDnsZones;
  }
  public putForwardViaGcpDnsZones(value: DnsForwarderForwardViaGcpDnsZones) {
    this._forwardViaGcpDnsZones.internalValue = value;
  }
  public resetForwardViaGcpDnsZones() {
    this._forwardViaGcpDnsZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardViaGcpDnsZonesInput() {
    return this._forwardViaGcpDnsZones.internalValue;
  }

  // forward_via_ip - computed: false, optional: true, required: false
  private _forwardViaIp = new DnsForwarderForwardViaIpOutputReference(this, "forward_via_ip");
  public get forwardViaIp() {
    return this._forwardViaIp;
  }
  public putForwardViaIp(value: DnsForwarderForwardViaIp) {
    this._forwardViaIp.internalValue = value;
  }
  public resetForwardViaIp() {
    this._forwardViaIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardViaIpInput() {
    return this._forwardViaIp.internalValue;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway = new DnsForwarderGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: DnsForwarderGateway) {
    this._gateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      id: cdktf.stringToTerraform(this._id),
      environment: dnsForwarderEnvironmentToTerraform(this._environment.internalValue),
      forward_via_gcp_dns_zones: dnsForwarderForwardViaGcpDnsZonesToTerraform(this._forwardViaGcpDnsZones.internalValue),
      forward_via_ip: dnsForwarderForwardViaIpToTerraform(this._forwardViaIp.internalValue),
      gateway: dnsForwarderGatewayToTerraform(this._gateway.internalValue),
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
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
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
      environment: {
        value: dnsForwarderEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsForwarderEnvironmentList",
      },
      forward_via_gcp_dns_zones: {
        value: dnsForwarderForwardViaGcpDnsZonesToHclTerraform(this._forwardViaGcpDnsZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsForwarderForwardViaGcpDnsZonesList",
      },
      forward_via_ip: {
        value: dnsForwarderForwardViaIpToHclTerraform(this._forwardViaIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsForwarderForwardViaIpList",
      },
      gateway: {
        value: dnsForwarderGatewayToHclTerraform(this._gateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsForwarderGatewayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
