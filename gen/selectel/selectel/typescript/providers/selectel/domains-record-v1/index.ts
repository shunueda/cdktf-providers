// https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainsRecordV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#algorithm DomainsRecordV1#algorithm}
  */
  readonly algorithm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#content DomainsRecordV1#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#domain_id DomainsRecordV1#domain_id}
  */
  readonly domainId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#email DomainsRecordV1#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#fingerprint DomainsRecordV1#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#fingerprint_type DomainsRecordV1#fingerprint_type}
  */
  readonly fingerprintType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#flag DomainsRecordV1#flag}
  */
  readonly flag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#id DomainsRecordV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#name DomainsRecordV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#port DomainsRecordV1#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#priority DomainsRecordV1#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#tag DomainsRecordV1#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#target DomainsRecordV1#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#ttl DomainsRecordV1#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#type DomainsRecordV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#value DomainsRecordV1#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#weight DomainsRecordV1#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1 selectel_domains_record_v1}
*/
export class DomainsRecordV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_domains_record_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainsRecordV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainsRecordV1 to import
  * @param importFromId The id of the existing DomainsRecordV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainsRecordV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_domains_record_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/domains_record_v1 selectel_domains_record_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainsRecordV1Config
  */
  public constructor(scope: Construct, id: string, config: DomainsRecordV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_domains_record_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.2.1',
        providerVersionConstraint: '7.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._content = config.content;
    this._domainId = config.domainId;
    this._email = config.email;
    this._fingerprint = config.fingerprint;
    this._fingerprintType = config.fingerprintType;
    this._flag = config.flag;
    this._id = config.id;
    this._name = config.name;
    this._port = config.port;
    this._priority = config.priority;
    this._tag = config.tag;
    this._target = config.target;
    this._ttl = config.ttl;
    this._type = config.type;
    this._value = config.value;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: number; 
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }
  public set algorithm(value: number) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // fingerprint_type - computed: false, optional: true, required: false
  private _fingerprintType?: number; 
  public get fingerprintType() {
    return this.getNumberAttribute('fingerprint_type');
  }
  public set fingerprintType(value: number) {
    this._fingerprintType = value;
  }
  public resetFingerprintType() {
    this._fingerprintType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintTypeInput() {
    return this._fingerprintType;
  }

  // flag - computed: false, optional: true, required: false
  private _flag?: number; 
  public get flag() {
    return this.getNumberAttribute('flag');
  }
  public set flag(value: number) {
    this._flag = value;
  }
  public resetFlag() {
    this._flag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

  // value - computed: false, optional: true, required: false
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
      algorithm: cdktf.numberToTerraform(this._algorithm),
      content: cdktf.stringToTerraform(this._content),
      domain_id: cdktf.numberToTerraform(this._domainId),
      email: cdktf.stringToTerraform(this._email),
      fingerprint: cdktf.stringToTerraform(this._fingerprint),
      fingerprint_type: cdktf.numberToTerraform(this._fingerprintType),
      flag: cdktf.numberToTerraform(this._flag),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      tag: cdktf.stringToTerraform(this._tag),
      target: cdktf.stringToTerraform(this._target),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.numberToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprint: {
        value: cdktf.stringToHclTerraform(this._fingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprint_type: {
        value: cdktf.numberToHclTerraform(this._fingerprintType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flag: {
        value: cdktf.numberToHclTerraform(this._flag),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
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
