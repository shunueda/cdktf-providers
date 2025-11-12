// https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDmeDnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#caa_type DataDmeDnsRecord#caa_type}
  */
  readonly caaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#description DataDmeDnsRecord#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#domain_id DataDmeDnsRecord#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#dynamic_dns DataDmeDnsRecord#dynamic_dns}
  */
  readonly dynamicDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#gtd_location DataDmeDnsRecord#gtd_location}
  */
  readonly gtdLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#hardlink DataDmeDnsRecord#hardlink}
  */
  readonly hardlink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#id DataDmeDnsRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#issuer_critical DataDmeDnsRecord#issuer_critical}
  */
  readonly issuerCritical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#keywords DataDmeDnsRecord#keywords}
  */
  readonly keywords?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#mx_level DataDmeDnsRecord#mx_level}
  */
  readonly mxLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#name DataDmeDnsRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#password DataDmeDnsRecord#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#port DataDmeDnsRecord#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#priority DataDmeDnsRecord#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#redirect_type DataDmeDnsRecord#redirect_type}
  */
  readonly redirectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#title DataDmeDnsRecord#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#ttl DataDmeDnsRecord#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#type DataDmeDnsRecord#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#value DataDmeDnsRecord#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#weight DataDmeDnsRecord#weight}
  */
  readonly weight?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record dme_dns_record}
*/
export class DataDmeDnsRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dme_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDmeDnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDmeDnsRecord to import
  * @param importFromId The id of the existing DataDmeDnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDmeDnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dme_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/dns_record dme_dns_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDmeDnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataDmeDnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'dme_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'dme',
        providerVersion: '1.0.8',
        providerVersionConstraint: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caaType = config.caaType;
    this._description = config.description;
    this._domainId = config.domainId;
    this._dynamicDns = config.dynamicDns;
    this._gtdLocation = config.gtdLocation;
    this._hardlink = config.hardlink;
    this._id = config.id;
    this._issuerCritical = config.issuerCritical;
    this._keywords = config.keywords;
    this._mxLevel = config.mxLevel;
    this._name = config.name;
    this._password = config.password;
    this._port = config.port;
    this._priority = config.priority;
    this._redirectType = config.redirectType;
    this._title = config.title;
    this._ttl = config.ttl;
    this._type = config.type;
    this._value = config.value;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caa_type - computed: true, optional: true, required: false
  private _caaType?: string; 
  public get caaType() {
    return this.getStringAttribute('caa_type');
  }
  public set caaType(value: string) {
    this._caaType = value;
  }
  public resetCaaType() {
    this._caaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caaTypeInput() {
    return this._caaType;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // dynamic_dns - computed: true, optional: true, required: false
  private _dynamicDns?: string; 
  public get dynamicDns() {
    return this.getStringAttribute('dynamic_dns');
  }
  public set dynamicDns(value: string) {
    this._dynamicDns = value;
  }
  public resetDynamicDns() {
    this._dynamicDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDnsInput() {
    return this._dynamicDns;
  }

  // gtd_location - computed: true, optional: true, required: false
  private _gtdLocation?: string; 
  public get gtdLocation() {
    return this.getStringAttribute('gtd_location');
  }
  public set gtdLocation(value: string) {
    this._gtdLocation = value;
  }
  public resetGtdLocation() {
    this._gtdLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtdLocationInput() {
    return this._gtdLocation;
  }

  // hardlink - computed: true, optional: true, required: false
  private _hardlink?: string; 
  public get hardlink() {
    return this.getStringAttribute('hardlink');
  }
  public set hardlink(value: string) {
    this._hardlink = value;
  }
  public resetHardlink() {
    this._hardlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardlinkInput() {
    return this._hardlink;
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

  // issuer_critical - computed: true, optional: true, required: false
  private _issuerCritical?: string; 
  public get issuerCritical() {
    return this.getStringAttribute('issuer_critical');
  }
  public set issuerCritical(value: string) {
    this._issuerCritical = value;
  }
  public resetIssuerCritical() {
    this._issuerCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerCriticalInput() {
    return this._issuerCritical;
  }

  // keywords - computed: true, optional: true, required: false
  private _keywords?: string; 
  public get keywords() {
    return this.getStringAttribute('keywords');
  }
  public set keywords(value: string) {
    this._keywords = value;
  }
  public resetKeywords() {
    this._keywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }

  // mx_level - computed: true, optional: true, required: false
  private _mxLevel?: string; 
  public get mxLevel() {
    return this.getStringAttribute('mx_level');
  }
  public set mxLevel(value: string) {
    this._mxLevel = value;
  }
  public resetMxLevel() {
    this._mxLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxLevelInput() {
    return this._mxLevel;
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // redirect_type - computed: true, optional: true, required: false
  private _redirectType?: string; 
  public get redirectType() {
    return this.getStringAttribute('redirect_type');
  }
  public set redirectType(value: string) {
    this._redirectType = value;
  }
  public resetRedirectType() {
    this._redirectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTypeInput() {
    return this._redirectType;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      caa_type: cdktf.stringToTerraform(this._caaType),
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.stringToTerraform(this._domainId),
      dynamic_dns: cdktf.stringToTerraform(this._dynamicDns),
      gtd_location: cdktf.stringToTerraform(this._gtdLocation),
      hardlink: cdktf.stringToTerraform(this._hardlink),
      id: cdktf.stringToTerraform(this._id),
      issuer_critical: cdktf.stringToTerraform(this._issuerCritical),
      keywords: cdktf.stringToTerraform(this._keywords),
      mx_level: cdktf.stringToTerraform(this._mxLevel),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      priority: cdktf.stringToTerraform(this._priority),
      redirect_type: cdktf.stringToTerraform(this._redirectType),
      title: cdktf.stringToTerraform(this._title),
      ttl: cdktf.stringToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      weight: cdktf.stringToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      caa_type: {
        value: cdktf.stringToHclTerraform(this._caaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      dynamic_dns: {
        value: cdktf.stringToHclTerraform(this._dynamicDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtd_location: {
        value: cdktf.stringToHclTerraform(this._gtdLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardlink: {
        value: cdktf.stringToHclTerraform(this._hardlink),
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
      issuer_critical: {
        value: cdktf.stringToHclTerraform(this._issuerCritical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keywords: {
        value: cdktf.stringToHclTerraform(this._keywords),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mx_level: {
        value: cdktf.stringToHclTerraform(this._mxLevel),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_type: {
        value: cdktf.stringToHclTerraform(this._redirectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      weight: {
        value: cdktf.stringToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
