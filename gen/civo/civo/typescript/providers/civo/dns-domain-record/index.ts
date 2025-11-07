// https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsDomainRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID from domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record#domain_id DnsDomainRecord#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record#id DnsDomainRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The portion before the domain name (e.g. www) or an @ for the apex/root domain (you cannot use an A record with an amex/root domain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record#name DnsDomainRecord#name}
  */
  readonly name: string;
  /**
  * Useful for MX records only, the priority mail should be attempted it (defaults to 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record#priority DnsDomainRecord#priority}
  */
  readonly priority?: number;
  /**
  * How long caching DNS servers should cache this record for, in seconds (the minimum is 600 and the default if unspecified is 600)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record#ttl DnsDomainRecord#ttl}
  */
  readonly ttl: number;
  /**
  * The choice of RR type from a, cname, mx, ns or txt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record#type DnsDomainRecord#type}
  */
  readonly type: string;
  /**
  * The IP address (A or MX), hostname (CNAME or MX) or text value (TXT) to serve for this record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record#value DnsDomainRecord#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record civo_dns_domain_record}
*/
export class DnsDomainRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "civo_dns_domain_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsDomainRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsDomainRecord to import
  * @param importFromId The id of the existing DnsDomainRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsDomainRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "civo_dns_domain_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/dns_domain_record civo_dns_domain_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsDomainRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsDomainRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'civo_dns_domain_record',
      terraformGeneratorMetadata: {
        providerName: 'civo',
        providerVersion: '1.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainId = config.domainId;
    this._id = config.id;
    this._name = config.name;
    this._priority = config.priority;
    this._ttl = config.ttl;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
