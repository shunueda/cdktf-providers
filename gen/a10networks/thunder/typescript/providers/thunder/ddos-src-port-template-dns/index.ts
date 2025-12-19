// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosSrcPortTemplateDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#id DdosSrcPortTemplateDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#name DdosSrcPortTemplateDns#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#user_tag DdosSrcPortTemplateDns#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#uuid DdosSrcPortTemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * query_resolution_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#query_resolution_check DdosSrcPortTemplateDns#query_resolution_check}
  */
  readonly queryResolutionCheck?: DdosSrcPortTemplateDnsQueryResolutionCheck;
}
export interface DdosSrcPortTemplateDnsQueryResolutionCheck {
  /**
  * 'default': Default, No action for future connections; 'blacklist-src': Blacklist the external server for future connections;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#big_response_action DdosSrcPortTemplateDns#big_response_action}
  */
  readonly bigResponseAction?: string;
  /**
  * Max DNS response size (in Bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#big_response_size DdosSrcPortTemplateDns#big_response_size}
  */
  readonly bigResponseSize?: number;
  /**
  * 'default': Default, No action for future connections; 'blacklist-src': Blacklist the external server for future connections;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#domain_lockup_action DdosSrcPortTemplateDns#domain_lockup_action}
  */
  readonly domainLockupAction?: string;
  /**
  * max session timeout (secs) between DNS external server and Protected object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#session_timeout_value DdosSrcPortTemplateDns#session_timeout_value}
  */
  readonly sessionTimeoutValue?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#uuid DdosSrcPortTemplateDns#uuid}
  */
  readonly uuid?: string;
}

export function ddosSrcPortTemplateDnsQueryResolutionCheckToTerraform(struct?: DdosSrcPortTemplateDnsQueryResolutionCheckOutputReference | DdosSrcPortTemplateDnsQueryResolutionCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    big_response_action: cdktf.stringToTerraform(struct!.bigResponseAction),
    big_response_size: cdktf.numberToTerraform(struct!.bigResponseSize),
    domain_lockup_action: cdktf.stringToTerraform(struct!.domainLockupAction),
    session_timeout_value: cdktf.numberToTerraform(struct!.sessionTimeoutValue),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosSrcPortTemplateDnsQueryResolutionCheckToHclTerraform(struct?: DdosSrcPortTemplateDnsQueryResolutionCheckOutputReference | DdosSrcPortTemplateDnsQueryResolutionCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    big_response_action: {
      value: cdktf.stringToHclTerraform(struct!.bigResponseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    big_response_size: {
      value: cdktf.numberToHclTerraform(struct!.bigResponseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_lockup_action: {
      value: cdktf.stringToHclTerraform(struct!.domainLockupAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout_value: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeoutValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosSrcPortTemplateDnsQueryResolutionCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosSrcPortTemplateDnsQueryResolutionCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigResponseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigResponseAction = this._bigResponseAction;
    }
    if (this._bigResponseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigResponseSize = this._bigResponseSize;
    }
    if (this._domainLockupAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainLockupAction = this._domainLockupAction;
    }
    if (this._sessionTimeoutValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutValue = this._sessionTimeoutValue;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSrcPortTemplateDnsQueryResolutionCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigResponseAction = undefined;
      this._bigResponseSize = undefined;
      this._domainLockupAction = undefined;
      this._sessionTimeoutValue = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigResponseAction = value.bigResponseAction;
      this._bigResponseSize = value.bigResponseSize;
      this._domainLockupAction = value.domainLockupAction;
      this._sessionTimeoutValue = value.sessionTimeoutValue;
      this._uuid = value.uuid;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns thunder_ddos_src_port_template_dns}
*/
export class DdosSrcPortTemplateDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_src_port_template_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosSrcPortTemplateDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosSrcPortTemplateDns to import
  * @param importFromId The id of the existing DdosSrcPortTemplateDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosSrcPortTemplateDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_src_port_template_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_port_template_dns thunder_ddos_src_port_template_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosSrcPortTemplateDnsConfig
  */
  public constructor(scope: Construct, id: string, config: DdosSrcPortTemplateDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_src_port_template_dns',
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
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._queryResolutionCheck.internalValue = config.queryResolutionCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // query_resolution_check - computed: false, optional: true, required: false
  private _queryResolutionCheck = new DdosSrcPortTemplateDnsQueryResolutionCheckOutputReference(this, "query_resolution_check");
  public get queryResolutionCheck() {
    return this._queryResolutionCheck;
  }
  public putQueryResolutionCheck(value: DdosSrcPortTemplateDnsQueryResolutionCheck) {
    this._queryResolutionCheck.internalValue = value;
  }
  public resetQueryResolutionCheck() {
    this._queryResolutionCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryResolutionCheckInput() {
    return this._queryResolutionCheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      query_resolution_check: ddosSrcPortTemplateDnsQueryResolutionCheckToTerraform(this._queryResolutionCheck.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      query_resolution_check: {
        value: ddosSrcPortTemplateDnsQueryResolutionCheckToHclTerraform(this._queryResolutionCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosSrcPortTemplateDnsQueryResolutionCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
