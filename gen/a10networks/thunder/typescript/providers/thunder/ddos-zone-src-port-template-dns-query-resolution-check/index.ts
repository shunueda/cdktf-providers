// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneSrcPortTemplateDnsQueryResolutionCheckAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'default': Default, No action for future connections; 'blacklist-src': Blacklist the external server for future connections;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check#big_response_action DdosZoneSrcPortTemplateDnsQueryResolutionCheckA#big_response_action}
  */
  readonly bigResponseAction?: string;
  /**
  * Max DNS response size (in Bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check#big_response_size DdosZoneSrcPortTemplateDnsQueryResolutionCheckA#big_response_size}
  */
  readonly bigResponseSize?: number;
  /**
  * 'default': Default, No action for future connections; 'blacklist-src': Blacklist the external server for future connections;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check#domain_lockup_action DdosZoneSrcPortTemplateDnsQueryResolutionCheckA#domain_lockup_action}
  */
  readonly domainLockupAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check#id DdosZoneSrcPortTemplateDnsQueryResolutionCheckA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check#name DdosZoneSrcPortTemplateDnsQueryResolutionCheckA#name}
  */
  readonly name: string;
  /**
  * max session timeout (secs) between DNS external server and Protected object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check#session_timeout_value DdosZoneSrcPortTemplateDnsQueryResolutionCheckA#session_timeout_value}
  */
  readonly sessionTimeoutValue?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check#uuid DdosZoneSrcPortTemplateDnsQueryResolutionCheckA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check thunder_ddos_zone_src_port_template_dns_query_resolution_check}
*/
export class DdosZoneSrcPortTemplateDnsQueryResolutionCheckA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_src_port_template_dns_query_resolution_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneSrcPortTemplateDnsQueryResolutionCheckA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneSrcPortTemplateDnsQueryResolutionCheckA to import
  * @param importFromId The id of the existing DdosZoneSrcPortTemplateDnsQueryResolutionCheckA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneSrcPortTemplateDnsQueryResolutionCheckA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_src_port_template_dns_query_resolution_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_src_port_template_dns_query_resolution_check thunder_ddos_zone_src_port_template_dns_query_resolution_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneSrcPortTemplateDnsQueryResolutionCheckAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneSrcPortTemplateDnsQueryResolutionCheckAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_src_port_template_dns_query_resolution_check',
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
    this._bigResponseAction = config.bigResponseAction;
    this._bigResponseSize = config.bigResponseSize;
    this._domainLockupAction = config.domainLockupAction;
    this._id = config.id;
    this._name = config.name;
    this._sessionTimeoutValue = config.sessionTimeoutValue;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // big_response_action - computed: false, optional: true, required: false
  private _bigResponseAction?: string; 
  public get bigResponseAction() {
    return this.getStringAttribute('big_response_action');
  }
  public set bigResponseAction(value: string) {
    this._bigResponseAction = value;
  }
  public resetBigResponseAction() {
    this._bigResponseAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigResponseActionInput() {
    return this._bigResponseAction;
  }

  // big_response_size - computed: false, optional: true, required: false
  private _bigResponseSize?: number; 
  public get bigResponseSize() {
    return this.getNumberAttribute('big_response_size');
  }
  public set bigResponseSize(value: number) {
    this._bigResponseSize = value;
  }
  public resetBigResponseSize() {
    this._bigResponseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigResponseSizeInput() {
    return this._bigResponseSize;
  }

  // domain_lockup_action - computed: false, optional: true, required: false
  private _domainLockupAction?: string; 
  public get domainLockupAction() {
    return this.getStringAttribute('domain_lockup_action');
  }
  public set domainLockupAction(value: string) {
    this._domainLockupAction = value;
  }
  public resetDomainLockupAction() {
    this._domainLockupAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainLockupActionInput() {
    return this._domainLockupAction;
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

  // session_timeout_value - computed: false, optional: true, required: false
  private _sessionTimeoutValue?: number; 
  public get sessionTimeoutValue() {
    return this.getNumberAttribute('session_timeout_value');
  }
  public set sessionTimeoutValue(value: number) {
    this._sessionTimeoutValue = value;
  }
  public resetSessionTimeoutValue() {
    this._sessionTimeoutValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutValueInput() {
    return this._sessionTimeoutValue;
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
      big_response_action: cdktf.stringToTerraform(this._bigResponseAction),
      big_response_size: cdktf.numberToTerraform(this._bigResponseSize),
      domain_lockup_action: cdktf.stringToTerraform(this._domainLockupAction),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      session_timeout_value: cdktf.numberToTerraform(this._sessionTimeoutValue),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      big_response_action: {
        value: cdktf.stringToHclTerraform(this._bigResponseAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      big_response_size: {
        value: cdktf.numberToHclTerraform(this._bigResponseSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_lockup_action: {
        value: cdktf.stringToHclTerraform(this._domainLockupAction),
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
      session_timeout_value: {
        value: cdktf.numberToHclTerraform(this._sessionTimeoutValue),
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
