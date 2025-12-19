// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsCategoryLookupConfig extends cdktf.TerraformMetaArguments {
  /**
  * category-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#category_name SlbTemplateDnsCategoryLookup#category_name}
  */
  readonly categoryName: string;
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#dns_name SlbTemplateDnsCategoryLookup#dns_name}
  */
  readonly dnsName: string;
  /**
  * Deny matching DNS domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#drop SlbTemplateDnsCategoryLookup#drop}
  */
  readonly drop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#id SlbTemplateDnsCategoryLookup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Permit matching DNS domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#permit SlbTemplateDnsCategoryLookup#permit}
  */
  readonly permit?: number;
  /**
  * Respond to matching DNS domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#respond SlbTemplateDnsCategoryLookup#respond}
  */
  readonly respond?: number;
  /**
  * CNAME to respond (Canonical name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#respond_cname_str SlbTemplateDnsCategoryLookup#respond_cname_str}
  */
  readonly respondCnameStr?: string;
  /**
  * Type A record to respond (IPv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#respond_ip_addr SlbTemplateDnsCategoryLookup#respond_ip_addr}
  */
  readonly respondIpAddr?: string;
  /**
  * TYPE AAAA record to respond (IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#respond_ipv6_addr SlbTemplateDnsCategoryLookup#respond_ipv6_addr}
  */
  readonly respondIpv6Addr?: string;
  /**
  * Respond with NXDOMAIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#respond_nxdomain SlbTemplateDnsCategoryLookup#respond_nxdomain}
  */
  readonly respondNxdomain?: number;
  /**
  * Set response TTL in seconds (TTL value in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#response_ttl SlbTemplateDnsCategoryLookup#response_ttl}
  */
  readonly responseTtl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#uuid SlbTemplateDnsCategoryLookup#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup thunder_slb_template_dns_category_lookup}
*/
export class SlbTemplateDnsCategoryLookup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_category_lookup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsCategoryLookup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsCategoryLookup to import
  * @param importFromId The id of the existing SlbTemplateDnsCategoryLookup that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsCategoryLookup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_category_lookup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_category_lookup thunder_slb_template_dns_category_lookup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsCategoryLookupConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsCategoryLookupConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_category_lookup',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categoryName = config.categoryName;
    this._dnsName = config.dnsName;
    this._drop = config.drop;
    this._id = config.id;
    this._permit = config.permit;
    this._respond = config.respond;
    this._respondCnameStr = config.respondCnameStr;
    this._respondIpAddr = config.respondIpAddr;
    this._respondIpv6Addr = config.respondIpv6Addr;
    this._respondNxdomain = config.respondNxdomain;
    this._responseTtl = config.responseTtl;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_name - computed: false, optional: false, required: true
  private _categoryName?: string; 
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }
  public set categoryName(value: string) {
    this._categoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryNameInput() {
    return this._categoryName;
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
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

  // permit - computed: false, optional: true, required: false
  private _permit?: number; 
  public get permit() {
    return this.getNumberAttribute('permit');
  }
  public set permit(value: number) {
    this._permit = value;
  }
  public resetPermit() {
    this._permit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }

  // respond - computed: false, optional: true, required: false
  private _respond?: number; 
  public get respond() {
    return this.getNumberAttribute('respond');
  }
  public set respond(value: number) {
    this._respond = value;
  }
  public resetRespond() {
    this._respond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondInput() {
    return this._respond;
  }

  // respond_cname_str - computed: false, optional: true, required: false
  private _respondCnameStr?: string; 
  public get respondCnameStr() {
    return this.getStringAttribute('respond_cname_str');
  }
  public set respondCnameStr(value: string) {
    this._respondCnameStr = value;
  }
  public resetRespondCnameStr() {
    this._respondCnameStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondCnameStrInput() {
    return this._respondCnameStr;
  }

  // respond_ip_addr - computed: false, optional: true, required: false
  private _respondIpAddr?: string; 
  public get respondIpAddr() {
    return this.getStringAttribute('respond_ip_addr');
  }
  public set respondIpAddr(value: string) {
    this._respondIpAddr = value;
  }
  public resetRespondIpAddr() {
    this._respondIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondIpAddrInput() {
    return this._respondIpAddr;
  }

  // respond_ipv6_addr - computed: false, optional: true, required: false
  private _respondIpv6Addr?: string; 
  public get respondIpv6Addr() {
    return this.getStringAttribute('respond_ipv6_addr');
  }
  public set respondIpv6Addr(value: string) {
    this._respondIpv6Addr = value;
  }
  public resetRespondIpv6Addr() {
    this._respondIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondIpv6AddrInput() {
    return this._respondIpv6Addr;
  }

  // respond_nxdomain - computed: false, optional: true, required: false
  private _respondNxdomain?: number; 
  public get respondNxdomain() {
    return this.getNumberAttribute('respond_nxdomain');
  }
  public set respondNxdomain(value: number) {
    this._respondNxdomain = value;
  }
  public resetRespondNxdomain() {
    this._respondNxdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondNxdomainInput() {
    return this._respondNxdomain;
  }

  // response_ttl - computed: false, optional: true, required: false
  private _responseTtl?: number; 
  public get responseTtl() {
    return this.getNumberAttribute('response_ttl');
  }
  public set responseTtl(value: number) {
    this._responseTtl = value;
  }
  public resetResponseTtl() {
    this._responseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTtlInput() {
    return this._responseTtl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category_name: cdktf.stringToTerraform(this._categoryName),
      dns_name: cdktf.stringToTerraform(this._dnsName),
      drop: cdktf.numberToTerraform(this._drop),
      id: cdktf.stringToTerraform(this._id),
      permit: cdktf.numberToTerraform(this._permit),
      respond: cdktf.numberToTerraform(this._respond),
      respond_cname_str: cdktf.stringToTerraform(this._respondCnameStr),
      respond_ip_addr: cdktf.stringToTerraform(this._respondIpAddr),
      respond_ipv6_addr: cdktf.stringToTerraform(this._respondIpv6Addr),
      respond_nxdomain: cdktf.numberToTerraform(this._respondNxdomain),
      response_ttl: cdktf.numberToTerraform(this._responseTtl),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category_name: {
        value: cdktf.stringToHclTerraform(this._categoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop: {
        value: cdktf.numberToHclTerraform(this._drop),
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
      permit: {
        value: cdktf.numberToHclTerraform(this._permit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      respond: {
        value: cdktf.numberToHclTerraform(this._respond),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      respond_cname_str: {
        value: cdktf.stringToHclTerraform(this._respondCnameStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respond_ip_addr: {
        value: cdktf.stringToHclTerraform(this._respondIpAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respond_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._respondIpv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respond_nxdomain: {
        value: cdktf.numberToHclTerraform(this._respondNxdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_ttl: {
        value: cdktf.numberToHclTerraform(this._responseTtl),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
