// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateUdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * short age (in sec), default is 31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#age SlbTemplateUdp#age}
  */
  readonly age?: number;
  /**
  * '4': NAS-IP-address; '8': Framed-IP-Address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#avp SlbTemplateUdp#avp}
  */
  readonly avp?: string;
  /**
  * Disable immediate clearing of session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#disable_clear_session SlbTemplateUdp#disable_clear_session}
  */
  readonly disableClearSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#id SlbTemplateUdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Idle Timeout value (Interval of 60 seconds), default 120 seconds (idle timeout in second, default 120)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#idle_timeout SlbTemplateUdp#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Immediate Removal after Transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#immediate SlbTemplateUdp#immediate}
  */
  readonly immediate?: number;
  /**
  * Fast UDP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#name SlbTemplateUdp#name}
  */
  readonly name: string;
  /**
  * QOS level (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#qos SlbTemplateUdp#qos}
  */
  readonly qos?: number;
  /**
  * 'ip': IP-Hash; 'ipv6': IPv6-Hash;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#radius_lb_method_hash_type SlbTemplateUdp#radius_lb_method_hash_type}
  */
  readonly radiusLbMethodHashType?: string;
  /**
  * re-select another server if service port is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#re_select_if_server_down SlbTemplateUdp#re_select_if_server_down}
  */
  readonly reSelectIfServerDown?: number;
  /**
  * Short lived session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#short SlbTemplateUdp#short}
  */
  readonly short?: number;
  /**
  * Stateless Current Connection Timeout value (5 - 120 seconds) (idle timeout in second, default 120)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#stateless_conn_timeout SlbTemplateUdp#stateless_conn_timeout}
  */
  readonly statelessConnTimeout?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#user_tag SlbTemplateUdp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#uuid SlbTemplateUdp#uuid}
  */
  readonly uuid?: string;
  /**
  * '168': Framed-IPv6-Address; '97': Framed-IPv6-PrefixFramed-IPv6-Prefix;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#v6avp SlbTemplateUdp#v6avp}
  */
  readonly v6Avp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp thunder_slb_template_udp}
*/
export class SlbTemplateUdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateUdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateUdp to import
  * @param importFromId The id of the existing SlbTemplateUdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateUdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_udp thunder_slb_template_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateUdpConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateUdpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_udp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._age = config.age;
    this._avp = config.avp;
    this._disableClearSession = config.disableClearSession;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._immediate = config.immediate;
    this._name = config.name;
    this._qos = config.qos;
    this._radiusLbMethodHashType = config.radiusLbMethodHashType;
    this._reSelectIfServerDown = config.reSelectIfServerDown;
    this._short = config.short;
    this._statelessConnTimeout = config.statelessConnTimeout;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._v6Avp = config.v6Avp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // avp - computed: false, optional: true, required: false
  private _avp?: string; 
  public get avp() {
    return this.getStringAttribute('avp');
  }
  public set avp(value: string) {
    this._avp = value;
  }
  public resetAvp() {
    this._avp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avpInput() {
    return this._avp;
  }

  // disable_clear_session - computed: false, optional: true, required: false
  private _disableClearSession?: number; 
  public get disableClearSession() {
    return this.getNumberAttribute('disable_clear_session');
  }
  public set disableClearSession(value: number) {
    this._disableClearSession = value;
  }
  public resetDisableClearSession() {
    this._disableClearSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableClearSessionInput() {
    return this._disableClearSession;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // immediate - computed: false, optional: true, required: false
  private _immediate?: number; 
  public get immediate() {
    return this.getNumberAttribute('immediate');
  }
  public set immediate(value: number) {
    this._immediate = value;
  }
  public resetImmediate() {
    this._immediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateInput() {
    return this._immediate;
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

  // qos - computed: false, optional: true, required: false
  private _qos?: number; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // radius_lb_method_hash_type - computed: false, optional: true, required: false
  private _radiusLbMethodHashType?: string; 
  public get radiusLbMethodHashType() {
    return this.getStringAttribute('radius_lb_method_hash_type');
  }
  public set radiusLbMethodHashType(value: string) {
    this._radiusLbMethodHashType = value;
  }
  public resetRadiusLbMethodHashType() {
    this._radiusLbMethodHashType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusLbMethodHashTypeInput() {
    return this._radiusLbMethodHashType;
  }

  // re_select_if_server_down - computed: false, optional: true, required: false
  private _reSelectIfServerDown?: number; 
  public get reSelectIfServerDown() {
    return this.getNumberAttribute('re_select_if_server_down');
  }
  public set reSelectIfServerDown(value: number) {
    this._reSelectIfServerDown = value;
  }
  public resetReSelectIfServerDown() {
    this._reSelectIfServerDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reSelectIfServerDownInput() {
    return this._reSelectIfServerDown;
  }

  // short - computed: false, optional: true, required: false
  private _short?: number; 
  public get short() {
    return this.getNumberAttribute('short');
  }
  public set short(value: number) {
    this._short = value;
  }
  public resetShort() {
    this._short = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortInput() {
    return this._short;
  }

  // stateless_conn_timeout - computed: false, optional: true, required: false
  private _statelessConnTimeout?: number; 
  public get statelessConnTimeout() {
    return this.getNumberAttribute('stateless_conn_timeout');
  }
  public set statelessConnTimeout(value: number) {
    this._statelessConnTimeout = value;
  }
  public resetStatelessConnTimeout() {
    this._statelessConnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessConnTimeoutInput() {
    return this._statelessConnTimeout;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // v6avp - computed: false, optional: true, required: false
  private _v6Avp?: string; 
  public get v6Avp() {
    return this.getStringAttribute('v6avp');
  }
  public set v6Avp(value: string) {
    this._v6Avp = value;
  }
  public resetV6Avp() {
    this._v6Avp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AvpInput() {
    return this._v6Avp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      age: cdktf.numberToTerraform(this._age),
      avp: cdktf.stringToTerraform(this._avp),
      disable_clear_session: cdktf.numberToTerraform(this._disableClearSession),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      immediate: cdktf.numberToTerraform(this._immediate),
      name: cdktf.stringToTerraform(this._name),
      qos: cdktf.numberToTerraform(this._qos),
      radius_lb_method_hash_type: cdktf.stringToTerraform(this._radiusLbMethodHashType),
      re_select_if_server_down: cdktf.numberToTerraform(this._reSelectIfServerDown),
      short: cdktf.numberToTerraform(this._short),
      stateless_conn_timeout: cdktf.numberToTerraform(this._statelessConnTimeout),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      v6avp: cdktf.stringToTerraform(this._v6Avp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      age: {
        value: cdktf.numberToHclTerraform(this._age),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      avp: {
        value: cdktf.stringToHclTerraform(this._avp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_clear_session: {
        value: cdktf.numberToHclTerraform(this._disableClearSession),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      immediate: {
        value: cdktf.numberToHclTerraform(this._immediate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos: {
        value: cdktf.numberToHclTerraform(this._qos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_lb_method_hash_type: {
        value: cdktf.stringToHclTerraform(this._radiusLbMethodHashType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      re_select_if_server_down: {
        value: cdktf.numberToHclTerraform(this._reSelectIfServerDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      short: {
        value: cdktf.numberToHclTerraform(this._short),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stateless_conn_timeout: {
        value: cdktf.numberToHclTerraform(this._statelessConnTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6avp: {
        value: cdktf.stringToHclTerraform(this._v6Avp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
