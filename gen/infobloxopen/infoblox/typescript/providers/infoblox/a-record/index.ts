// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ARecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network to allocate an IP address from, when the 'ip_addr' field is empty (dynamic allocation). The address is in CIDR format. For static allocation, leave this field empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#cidr ARecord#cidr}
  */
  readonly cidr?: string;
  /**
  * Description of the A-record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#comment ARecord#comment}
  */
  readonly comment?: string;
  /**
  * DNS view which the zone does exist within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#dns_view ARecord#dns_view}
  */
  readonly dnsView?: string;
  /**
  * Extensible attributes of the A-record to be added/updated, as a map in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#ext_attrs ARecord#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * The parent network block's extensible attributes (dynamic allocation). For static allocation, leave this field empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#filter_params ARecord#filter_params}
  */
  readonly filterParams?: string;
  /**
  * FQDN for the A-record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#fqdn ARecord#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#id ARecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address to associate with the A-record. For static allocation, set the field with a valid IP address. For dynamic allocation, leave this field empty and set 'cidr' and 'network_view' fieldsor 'filter_params' and optional 'network_view' fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#ip_addr ARecord#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Network view to use when allocating an IP address from a network dynamically. For static allocation, leave this field empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#network_view ARecord#network_view}
  */
  readonly networkView?: string;
  /**
  * TTL value for the A-record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#ttl ARecord#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record infoblox_a_record}
*/
export class ARecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_a_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ARecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ARecord to import
  * @param importFromId The id of the existing ARecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ARecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_a_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/a_record infoblox_a_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ARecordConfig
  */
  public constructor(scope: Construct, id: string, config: ARecordConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_a_record',
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
    this._cidr = config.cidr;
    this._comment = config.comment;
    this._dnsView = config.dnsView;
    this._extAttrs = config.extAttrs;
    this._filterParams = config.filterParams;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._ipAddr = config.ipAddr;
    this._networkView = config.networkView;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

  // dns_view - computed: false, optional: true, required: false
  private _dnsView?: string; 
  public get dnsView() {
    return this.getStringAttribute('dns_view');
  }
  public set dnsView(value: string) {
    this._dnsView = value;
  }
  public resetDnsView() {
    this._dnsView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsViewInput() {
    return this._dnsView;
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

  // filter_params - computed: false, optional: true, required: false
  private _filterParams?: string; 
  public get filterParams() {
    return this.getStringAttribute('filter_params');
  }
  public set filterParams(value: string) {
    this._filterParams = value;
  }
  public resetFilterParams() {
    this._filterParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParamsInput() {
    return this._filterParams;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // ip_addr - computed: true, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // network_view - computed: true, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      comment: cdktf.stringToTerraform(this._comment),
      dns_view: cdktf.stringToTerraform(this._dnsView),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      filter_params: cdktf.stringToTerraform(this._filterParams),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      ip_addr: cdktf.stringToTerraform(this._ipAddr),
      network_view: cdktf.stringToTerraform(this._networkView),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
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
      dns_view: {
        value: cdktf.stringToHclTerraform(this._dnsView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_params: {
        value: cdktf.stringToHclTerraform(this._filterParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      ip_addr: {
        value: cdktf.stringToHclTerraform(this._ipAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_view: {
        value: cdktf.stringToHclTerraform(this._networkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
