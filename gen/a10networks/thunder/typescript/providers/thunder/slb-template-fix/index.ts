// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateFixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#id SlbTemplateFix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Insert client ip to tag 11447
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#insert_client_ip SlbTemplateFix#insert_client_ip}
  */
  readonly insertClientIp?: number;
  /**
  * 'init': init only log; 'term': termination only log; 'both': both initial and termination log;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#logging SlbTemplateFix#logging}
  */
  readonly logging?: string;
  /**
  * FIX Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#name SlbTemplateFix#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#user_tag SlbTemplateFix#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#uuid SlbTemplateFix#uuid}
  */
  readonly uuid?: string;
  /**
  * tag_switching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#tag_switching SlbTemplateFix#tag_switching}
  */
  readonly tagSwitching?: SlbTemplateFixTagSwitching[] | cdktf.IResolvable;
}
export interface SlbTemplateFixTagSwitching {
  /**
  * Equals (Tag String)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#equals SlbTemplateFix#equals}
  */
  readonly equalTo?: string;
  /**
  * Create a Service Group comprising Servers (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#service_group SlbTemplateFix#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * 'sender-comp-id': Select service group based on SenderCompID; 'target-comp-id': Select service group based on TargetCompID;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#switching_type SlbTemplateFix#switching_type}
  */
  readonly switchingType?: string;
}

export function slbTemplateFixTagSwitchingToTerraform(struct?: SlbTemplateFixTagSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equals: cdktf.stringToTerraform(struct!.equalTo),
    service_group: cdktf.stringToTerraform(struct!.serviceGroup),
    switching_type: cdktf.stringToTerraform(struct!.switchingType),
  }
}


export function slbTemplateFixTagSwitchingToHclTerraform(struct?: SlbTemplateFixTagSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switching_type: {
      value: cdktf.stringToHclTerraform(struct!.switchingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateFixTagSwitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateFixTagSwitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._serviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroup = this._serviceGroup;
    }
    if (this._switchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchingType = this._switchingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateFixTagSwitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equals = undefined;
      this._serviceGroup = undefined;
      this._switchingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equals = value.equalTo;
      this._serviceGroup = value.serviceGroup;
      this._switchingType = value.switchingType;
    }
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // switching_type - computed: false, optional: true, required: false
  private _switchingType?: string; 
  public get switchingType() {
    return this.getStringAttribute('switching_type');
  }
  public set switchingType(value: string) {
    this._switchingType = value;
  }
  public resetSwitchingType() {
    this._switchingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingTypeInput() {
    return this._switchingType;
  }
}

export class SlbTemplateFixTagSwitchingList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateFixTagSwitching[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateFixTagSwitchingOutputReference {
    return new SlbTemplateFixTagSwitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix thunder_slb_template_fix}
*/
export class SlbTemplateFix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_fix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateFix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateFix to import
  * @param importFromId The id of the existing SlbTemplateFix that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateFix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_fix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_fix thunder_slb_template_fix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateFixConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateFixConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_fix',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._insertClientIp = config.insertClientIp;
    this._logging = config.logging;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._tagSwitching.internalValue = config.tagSwitching;
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

  // insert_client_ip - computed: false, optional: true, required: false
  private _insertClientIp?: number; 
  public get insertClientIp() {
    return this.getNumberAttribute('insert_client_ip');
  }
  public set insertClientIp(value: number) {
    this._insertClientIp = value;
  }
  public resetInsertClientIp() {
    this._insertClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientIpInput() {
    return this._insertClientIp;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
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

  // tag_switching - computed: false, optional: true, required: false
  private _tagSwitching = new SlbTemplateFixTagSwitchingList(this, "tag_switching", false);
  public get tagSwitching() {
    return this._tagSwitching;
  }
  public putTagSwitching(value: SlbTemplateFixTagSwitching[] | cdktf.IResolvable) {
    this._tagSwitching.internalValue = value;
  }
  public resetTagSwitching() {
    this._tagSwitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSwitchingInput() {
    return this._tagSwitching.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      insert_client_ip: cdktf.numberToTerraform(this._insertClientIp),
      logging: cdktf.stringToTerraform(this._logging),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      tag_switching: cdktf.listMapper(slbTemplateFixTagSwitchingToTerraform, true)(this._tagSwitching.internalValue),
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
      insert_client_ip: {
        value: cdktf.numberToHclTerraform(this._insertClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
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
      tag_switching: {
        value: cdktf.listMapperHcl(slbTemplateFixTagSwitchingToHclTerraform, true)(this._tagSwitching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateFixTagSwitchingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
