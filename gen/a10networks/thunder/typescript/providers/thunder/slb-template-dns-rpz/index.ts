// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsRpzConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#dns_name SlbTemplateDnsRpz#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#id SlbTemplateDnsRpz#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify a Response Policy Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#name SlbTemplateDnsRpz#name}
  */
  readonly name?: string;
  /**
  * sequential id of RPZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#seq_id SlbTemplateDnsRpz#seq_id}
  */
  readonly seqId: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#user_tag SlbTemplateDnsRpz#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#uuid SlbTemplateDnsRpz#uuid}
  */
  readonly uuid?: string;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#logging SlbTemplateDnsRpz#logging}
  */
  readonly logging?: SlbTemplateDnsRpzLogging;
}
export interface SlbTemplateDnsRpzLoggingRpzAction {
  /**
  * 'drop': Log RPZ due to drop action; 'pass-thru': Log RPZ due to pass-thru action; 'nxdomain': Log RPZ due to nxdomain action; 'nodata': Log RPZ due to nodata action; 'tcp-only': Log RPZ due to tcp-only action; 'local-data': Log RPZ due to local-data action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#str_rpz_action SlbTemplateDnsRpz#str_rpz_action}
  */
  readonly strRpzAction?: string;
}

export function slbTemplateDnsRpzLoggingRpzActionToTerraform(struct?: SlbTemplateDnsRpzLoggingRpzAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    str_rpz_action: cdktf.stringToTerraform(struct!.strRpzAction),
  }
}


export function slbTemplateDnsRpzLoggingRpzActionToHclTerraform(struct?: SlbTemplateDnsRpzLoggingRpzAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    str_rpz_action: {
      value: cdktf.stringToHclTerraform(struct!.strRpzAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRpzLoggingRpzActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlbTemplateDnsRpzLoggingRpzAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strRpzAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.strRpzAction = this._strRpzAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRpzLoggingRpzAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._strRpzAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._strRpzAction = value.strRpzAction;
    }
  }

  // str_rpz_action - computed: false, optional: true, required: false
  private _strRpzAction?: string; 
  public get strRpzAction() {
    return this.getStringAttribute('str_rpz_action');
  }
  public set strRpzAction(value: string) {
    this._strRpzAction = value;
  }
  public resetStrRpzAction() {
    this._strRpzAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strRpzActionInput() {
    return this._strRpzAction;
  }
}

export class SlbTemplateDnsRpzLoggingRpzActionList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsRpzLoggingRpzAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlbTemplateDnsRpzLoggingRpzActionOutputReference {
    return new SlbTemplateDnsRpzLoggingRpzActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsRpzLogging {
  /**
  * Log RPZ triggered action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#enable SlbTemplateDnsRpz#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#uuid SlbTemplateDnsRpz#uuid}
  */
  readonly uuid?: string;
  /**
  * rpz_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#rpz_action SlbTemplateDnsRpz#rpz_action}
  */
  readonly rpzAction?: SlbTemplateDnsRpzLoggingRpzAction[] | cdktf.IResolvable;
}

export function slbTemplateDnsRpzLoggingToTerraform(struct?: SlbTemplateDnsRpzLoggingOutputReference | SlbTemplateDnsRpzLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    rpz_action: cdktf.listMapper(slbTemplateDnsRpzLoggingRpzActionToTerraform, true)(struct!.rpzAction),
  }
}


export function slbTemplateDnsRpzLoggingToHclTerraform(struct?: SlbTemplateDnsRpzLoggingOutputReference | SlbTemplateDnsRpzLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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
    rpz_action: {
      value: cdktf.listMapperHcl(slbTemplateDnsRpzLoggingRpzActionToHclTerraform, true)(struct!.rpzAction),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsRpzLoggingRpzActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsRpzLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsRpzLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._rpzAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzAction = this._rpzAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsRpzLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
      this._rpzAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
      this._rpzAction.internalValue = value.rpzAction;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // rpz_action - computed: false, optional: true, required: false
  private _rpzAction = new SlbTemplateDnsRpzLoggingRpzActionList(this, "rpz_action", false);
  public get rpzAction() {
    return this._rpzAction;
  }
  public putRpzAction(value: SlbTemplateDnsRpzLoggingRpzAction[] | cdktf.IResolvable) {
    this._rpzAction.internalValue = value;
  }
  public resetRpzAction() {
    this._rpzAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzActionInput() {
    return this._rpzAction.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz thunder_slb_template_dns_rpz}
*/
export class SlbTemplateDnsRpz extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_rpz";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsRpz resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsRpz to import
  * @param importFromId The id of the existing SlbTemplateDnsRpz that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsRpz to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_rpz", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_rpz thunder_slb_template_dns_rpz} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsRpzConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsRpzConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_rpz',
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
    this._dnsName = config.dnsName;
    this._id = config.id;
    this._name = config.name;
    this._seqId = config.seqId;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._logging.internalValue = config.logging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // seq_id - computed: false, optional: false, required: true
  private _seqId?: number; 
  public get seqId() {
    return this.getNumberAttribute('seq_id');
  }
  public set seqId(value: number) {
    this._seqId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqIdInput() {
    return this._seqId;
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

  // logging - computed: false, optional: true, required: false
  private _logging = new SlbTemplateDnsRpzLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: SlbTemplateDnsRpzLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name: cdktf.stringToTerraform(this._dnsName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      seq_id: cdktf.numberToTerraform(this._seqId),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      logging: slbTemplateDnsRpzLoggingToTerraform(this._logging.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
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
      seq_id: {
        value: cdktf.numberToHclTerraform(this._seqId),
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
      logging: {
        value: slbTemplateDnsRpzLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsRpzLoggingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
