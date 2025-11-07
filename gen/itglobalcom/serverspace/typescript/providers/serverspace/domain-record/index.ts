// https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#canonical_name DomainRecord#canonical_name}
  */
  readonly canonicalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#domain DomainRecord#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#ip DomainRecord#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#mail_host DomainRecord#mail_host}
  */
  readonly mailHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#name DomainRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#name_server_host DomainRecord#name_server_host}
  */
  readonly nameServerHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#port DomainRecord#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#priority DomainRecord#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#protocol DomainRecord#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#service DomainRecord#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#target DomainRecord#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#text DomainRecord#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#ttl DomainRecord#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#type DomainRecord#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#weight DomainRecord#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record serverspace_domain_record}
*/
export class DomainRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverspace_domain_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainRecord to import
  * @param importFromId The id of the existing DomainRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverspace_domain_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/domain_record serverspace_domain_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DomainRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'serverspace_domain_record',
      terraformGeneratorMetadata: {
        providerName: 'serverspace',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canonicalName = config.canonicalName;
    this._domain = config.domain;
    this._ip = config.ip;
    this._mailHost = config.mailHost;
    this._name = config.name;
    this._nameServerHost = config.nameServerHost;
    this._port = config.port;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._service = config.service;
    this._target = config.target;
    this._text = config.text;
    this._ttl = config.ttl;
    this._type = config.type;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical_name - computed: false, optional: true, required: false
  private _canonicalName?: string; 
  public get canonicalName() {
    return this.getStringAttribute('canonical_name');
  }
  public set canonicalName(value: string) {
    this._canonicalName = value;
  }
  public resetCanonicalName() {
    this._canonicalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalNameInput() {
    return this._canonicalName;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mail_host - computed: false, optional: true, required: false
  private _mailHost?: string; 
  public get mailHost() {
    return this.getStringAttribute('mail_host');
  }
  public set mailHost(value: string) {
    this._mailHost = value;
  }
  public resetMailHost() {
    this._mailHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailHostInput() {
    return this._mailHost;
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

  // name_server_host - computed: false, optional: true, required: false
  private _nameServerHost?: string; 
  public get nameServerHost() {
    return this.getStringAttribute('name_server_host');
  }
  public set nameServerHost(value: string) {
    this._nameServerHost = value;
  }
  public resetNameServerHost() {
    this._nameServerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerHostInput() {
    return this._nameServerHost;
  }

  // port - computed: false, optional: true, required: false
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // ttl - computed: false, optional: true, required: false
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
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
      canonical_name: cdktf.stringToTerraform(this._canonicalName),
      domain: cdktf.stringToTerraform(this._domain),
      ip: cdktf.stringToTerraform(this._ip),
      mail_host: cdktf.stringToTerraform(this._mailHost),
      name: cdktf.stringToTerraform(this._name),
      name_server_host: cdktf.stringToTerraform(this._nameServerHost),
      port: cdktf.numberToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      service: cdktf.stringToTerraform(this._service),
      target: cdktf.stringToTerraform(this._target),
      text: cdktf.stringToTerraform(this._text),
      ttl: cdktf.stringToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      canonical_name: {
        value: cdktf.stringToHclTerraform(this._canonicalName),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mail_host: {
        value: cdktf.stringToHclTerraform(this._mailHost),
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
      name_server_host: {
        value: cdktf.stringToHclTerraform(this._nameServerHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
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
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
