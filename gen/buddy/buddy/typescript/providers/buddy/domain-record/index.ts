// https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The record's geolocation continent list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record#continent DomainRecord#continent}
  */
  readonly continent?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The record's geolocation country list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record#country DomainRecord#country}
  */
  readonly country?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The record's full domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record#domain DomainRecord#domain}
  */
  readonly domain: string;
  /**
  * The domain's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record#domain_id DomainRecord#domain_id}
  */
  readonly domainId: string;
  /**
  * The record's routing type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record#routing DomainRecord#routing}
  */
  readonly routing?: string;
  /**
  * The record's ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record#ttl DomainRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * The record's type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record#type DomainRecord#type}
  */
  readonly type: string;
  /**
  * The record's value list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record#value DomainRecord#value}
  */
  readonly value: string[];
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record#workspace_domain DomainRecord#workspace_domain}
  */
  readonly workspaceDomain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record buddy_domain_record}
*/
export class DomainRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_domain_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainRecord to import
  * @param importFromId The id of the existing DomainRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_domain_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain_record buddy_domain_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DomainRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_domain_record',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.37.1',
        providerVersionConstraint: '1.37.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._continent = config.continent;
    this._country = config.country;
    this._domain = config.domain;
    this._domainId = config.domainId;
    this._routing = config.routing;
    this._ttl = config.ttl;
    this._type = config.type;
    this._value = config.value;
    this._workspaceDomain = config.workspaceDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // continent - computed: true, optional: true, required: false
  private _continent?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get continent() {
    return this.interpolationForAttribute('continent');
  }
  public set continent(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._continent = value;
  }
  public resetContinent() {
    this._continent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentInput() {
    return this._continent;
  }

  // country - computed: true, optional: true, required: false
  private _country?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get country() {
    return this.interpolationForAttribute('country');
  }
  public set country(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // routing - computed: true, optional: true, required: false
  private _routing?: string; 
  public get routing() {
    return this.getStringAttribute('routing');
  }
  public set routing(value: string) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // workspace_domain - computed: false, optional: false, required: true
  private _workspaceDomain?: string; 
  public get workspaceDomain() {
    return this.getStringAttribute('workspace_domain');
  }
  public set workspaceDomain(value: string) {
    this._workspaceDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceDomainInput() {
    return this._workspaceDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      continent: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._continent),
      country: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._country),
      domain: cdktf.stringToTerraform(this._domain),
      domain_id: cdktf.stringToTerraform(this._domainId),
      routing: cdktf.stringToTerraform(this._routing),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._value),
      workspace_domain: cdktf.stringToTerraform(this._workspaceDomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      continent: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._continent),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      country: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._country),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing: {
        value: cdktf.stringToHclTerraform(this._routing),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._value),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workspace_domain: {
        value: cdktf.stringToHclTerraform(this._workspaceDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
