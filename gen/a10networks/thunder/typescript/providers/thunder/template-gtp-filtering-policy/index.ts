// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpFilteringPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'monitor': Forward packet; 'drop': drop packet (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#apn_imsi_filt_action TemplateGtpFilteringPolicy#apn_imsi_filt_action}
  */
  readonly apnImsiFiltAction?: string;
  /**
  * Specify the APN IMSI Inspection Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#apn_imsi_filtering TemplateGtpFilteringPolicy#apn_imsi_filtering}
  */
  readonly apnImsiFiltering?: string;
  /**
  * 'monitor': Forward packet; 'drop': drop packet (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#gtp_in_gtp_filt_action TemplateGtpFilteringPolicy#gtp_in_gtp_filt_action}
  */
  readonly gtpInGtpFiltAction?: string;
  /**
  * 'enable': Enable GTP-in-GTP Filtering; 'disable': Disable GTP-in-GTP Filtering;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#gtp_in_gtp_filtering TemplateGtpFilteringPolicy#gtp_in_gtp_filtering}
  */
  readonly gtpInGtpFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#id TemplateGtpFilteringPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'monitor': Forward packet; 'drop': drop packet (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#message_filt_action TemplateGtpFilteringPolicy#message_filt_action}
  */
  readonly messageFiltAction?: string;
  /**
  * Specify the Message Filtering Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#message_filtering_policy_name TemplateGtpFilteringPolicy#message_filtering_policy_name}
  */
  readonly messageFilteringPolicyName?: string;
  /**
  * 'monitor': Forward packet; 'drop': drop packet (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#msisdn_filt_action TemplateGtpFilteringPolicy#msisdn_filt_action}
  */
  readonly msisdnFiltAction?: string;
  /**
  * Specify the MSISDN Inspection Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#msisdn_filtering TemplateGtpFilteringPolicy#msisdn_filtering}
  */
  readonly msisdnFiltering?: string;
  /**
  * Specify name of the GTP Filtering Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#name TemplateGtpFilteringPolicy#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#user_tag TemplateGtpFilteringPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#uuid TemplateGtpFilteringPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * rat_type_filtering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#rat_type_filtering TemplateGtpFilteringPolicy#rat_type_filtering}
  */
  readonly ratTypeFiltering?: TemplateGtpFilteringPolicyRatTypeFiltering[] | cdktf.IResolvable;
}
export interface TemplateGtpFilteringPolicyRatTypeFiltering {
  /**
  * 'monitor': Forward packet; 'drop': drop packet (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#rat_type_filt_action TemplateGtpFilteringPolicy#rat_type_filt_action}
  */
  readonly ratTypeFiltAction?: string;
  /**
  * 'utran': RAT Type for 3G Networks; 'geran': RAT Type for 2G Networks; 'wlan': RAT Type for WLAN Networks; 'gan': RAT Type for GAN Networks; 'hspa-evolution': RAT Type for HSPA Networks; 'eutran': RAT Type for 4G Networks;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#rat_type_value TemplateGtpFilteringPolicy#rat_type_value}
  */
  readonly ratTypeValue?: string;
}

export function templateGtpFilteringPolicyRatTypeFilteringToTerraform(struct?: TemplateGtpFilteringPolicyRatTypeFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rat_type_filt_action: cdktf.stringToTerraform(struct!.ratTypeFiltAction),
    rat_type_value: cdktf.stringToTerraform(struct!.ratTypeValue),
  }
}


export function templateGtpFilteringPolicyRatTypeFilteringToHclTerraform(struct?: TemplateGtpFilteringPolicyRatTypeFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rat_type_filt_action: {
      value: cdktf.stringToHclTerraform(struct!.ratTypeFiltAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rat_type_value: {
      value: cdktf.stringToHclTerraform(struct!.ratTypeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateGtpFilteringPolicyRatTypeFilteringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateGtpFilteringPolicyRatTypeFiltering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ratTypeFiltAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratTypeFiltAction = this._ratTypeFiltAction;
    }
    if (this._ratTypeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratTypeValue = this._ratTypeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateGtpFilteringPolicyRatTypeFiltering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ratTypeFiltAction = undefined;
      this._ratTypeValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ratTypeFiltAction = value.ratTypeFiltAction;
      this._ratTypeValue = value.ratTypeValue;
    }
  }

  // rat_type_filt_action - computed: false, optional: true, required: false
  private _ratTypeFiltAction?: string; 
  public get ratTypeFiltAction() {
    return this.getStringAttribute('rat_type_filt_action');
  }
  public set ratTypeFiltAction(value: string) {
    this._ratTypeFiltAction = value;
  }
  public resetRatTypeFiltAction() {
    this._ratTypeFiltAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratTypeFiltActionInput() {
    return this._ratTypeFiltAction;
  }

  // rat_type_value - computed: false, optional: true, required: false
  private _ratTypeValue?: string; 
  public get ratTypeValue() {
    return this.getStringAttribute('rat_type_value');
  }
  public set ratTypeValue(value: string) {
    this._ratTypeValue = value;
  }
  public resetRatTypeValue() {
    this._ratTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratTypeValueInput() {
    return this._ratTypeValue;
  }
}

export class TemplateGtpFilteringPolicyRatTypeFilteringList extends cdktf.ComplexList {
  public internalValue? : TemplateGtpFilteringPolicyRatTypeFiltering[] | cdktf.IResolvable

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
  public get(index: number): TemplateGtpFilteringPolicyRatTypeFilteringOutputReference {
    return new TemplateGtpFilteringPolicyRatTypeFilteringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy thunder_template_gtp_filtering_policy}
*/
export class TemplateGtpFilteringPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_filtering_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpFilteringPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpFilteringPolicy to import
  * @param importFromId The id of the existing TemplateGtpFilteringPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpFilteringPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_filtering_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_filtering_policy thunder_template_gtp_filtering_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpFilteringPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpFilteringPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_filtering_policy',
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
    this._apnImsiFiltAction = config.apnImsiFiltAction;
    this._apnImsiFiltering = config.apnImsiFiltering;
    this._gtpInGtpFiltAction = config.gtpInGtpFiltAction;
    this._gtpInGtpFiltering = config.gtpInGtpFiltering;
    this._id = config.id;
    this._messageFiltAction = config.messageFiltAction;
    this._messageFilteringPolicyName = config.messageFilteringPolicyName;
    this._msisdnFiltAction = config.msisdnFiltAction;
    this._msisdnFiltering = config.msisdnFiltering;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ratTypeFiltering.internalValue = config.ratTypeFiltering;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apn_imsi_filt_action - computed: false, optional: true, required: false
  private _apnImsiFiltAction?: string; 
  public get apnImsiFiltAction() {
    return this.getStringAttribute('apn_imsi_filt_action');
  }
  public set apnImsiFiltAction(value: string) {
    this._apnImsiFiltAction = value;
  }
  public resetApnImsiFiltAction() {
    this._apnImsiFiltAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnImsiFiltActionInput() {
    return this._apnImsiFiltAction;
  }

  // apn_imsi_filtering - computed: false, optional: true, required: false
  private _apnImsiFiltering?: string; 
  public get apnImsiFiltering() {
    return this.getStringAttribute('apn_imsi_filtering');
  }
  public set apnImsiFiltering(value: string) {
    this._apnImsiFiltering = value;
  }
  public resetApnImsiFiltering() {
    this._apnImsiFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnImsiFilteringInput() {
    return this._apnImsiFiltering;
  }

  // gtp_in_gtp_filt_action - computed: false, optional: true, required: false
  private _gtpInGtpFiltAction?: string; 
  public get gtpInGtpFiltAction() {
    return this.getStringAttribute('gtp_in_gtp_filt_action');
  }
  public set gtpInGtpFiltAction(value: string) {
    this._gtpInGtpFiltAction = value;
  }
  public resetGtpInGtpFiltAction() {
    this._gtpInGtpFiltAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInGtpFiltActionInput() {
    return this._gtpInGtpFiltAction;
  }

  // gtp_in_gtp_filtering - computed: false, optional: true, required: false
  private _gtpInGtpFiltering?: string; 
  public get gtpInGtpFiltering() {
    return this.getStringAttribute('gtp_in_gtp_filtering');
  }
  public set gtpInGtpFiltering(value: string) {
    this._gtpInGtpFiltering = value;
  }
  public resetGtpInGtpFiltering() {
    this._gtpInGtpFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInGtpFilteringInput() {
    return this._gtpInGtpFiltering;
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

  // message_filt_action - computed: false, optional: true, required: false
  private _messageFiltAction?: string; 
  public get messageFiltAction() {
    return this.getStringAttribute('message_filt_action');
  }
  public set messageFiltAction(value: string) {
    this._messageFiltAction = value;
  }
  public resetMessageFiltAction() {
    this._messageFiltAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFiltActionInput() {
    return this._messageFiltAction;
  }

  // message_filtering_policy_name - computed: false, optional: true, required: false
  private _messageFilteringPolicyName?: string; 
  public get messageFilteringPolicyName() {
    return this.getStringAttribute('message_filtering_policy_name');
  }
  public set messageFilteringPolicyName(value: string) {
    this._messageFilteringPolicyName = value;
  }
  public resetMessageFilteringPolicyName() {
    this._messageFilteringPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFilteringPolicyNameInput() {
    return this._messageFilteringPolicyName;
  }

  // msisdn_filt_action - computed: false, optional: true, required: false
  private _msisdnFiltAction?: string; 
  public get msisdnFiltAction() {
    return this.getStringAttribute('msisdn_filt_action');
  }
  public set msisdnFiltAction(value: string) {
    this._msisdnFiltAction = value;
  }
  public resetMsisdnFiltAction() {
    this._msisdnFiltAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnFiltActionInput() {
    return this._msisdnFiltAction;
  }

  // msisdn_filtering - computed: false, optional: true, required: false
  private _msisdnFiltering?: string; 
  public get msisdnFiltering() {
    return this.getStringAttribute('msisdn_filtering');
  }
  public set msisdnFiltering(value: string) {
    this._msisdnFiltering = value;
  }
  public resetMsisdnFiltering() {
    this._msisdnFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnFilteringInput() {
    return this._msisdnFiltering;
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

  // rat_type_filtering - computed: false, optional: true, required: false
  private _ratTypeFiltering = new TemplateGtpFilteringPolicyRatTypeFilteringList(this, "rat_type_filtering", false);
  public get ratTypeFiltering() {
    return this._ratTypeFiltering;
  }
  public putRatTypeFiltering(value: TemplateGtpFilteringPolicyRatTypeFiltering[] | cdktf.IResolvable) {
    this._ratTypeFiltering.internalValue = value;
  }
  public resetRatTypeFiltering() {
    this._ratTypeFiltering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratTypeFilteringInput() {
    return this._ratTypeFiltering.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apn_imsi_filt_action: cdktf.stringToTerraform(this._apnImsiFiltAction),
      apn_imsi_filtering: cdktf.stringToTerraform(this._apnImsiFiltering),
      gtp_in_gtp_filt_action: cdktf.stringToTerraform(this._gtpInGtpFiltAction),
      gtp_in_gtp_filtering: cdktf.stringToTerraform(this._gtpInGtpFiltering),
      id: cdktf.stringToTerraform(this._id),
      message_filt_action: cdktf.stringToTerraform(this._messageFiltAction),
      message_filtering_policy_name: cdktf.stringToTerraform(this._messageFilteringPolicyName),
      msisdn_filt_action: cdktf.stringToTerraform(this._msisdnFiltAction),
      msisdn_filtering: cdktf.stringToTerraform(this._msisdnFiltering),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      rat_type_filtering: cdktf.listMapper(templateGtpFilteringPolicyRatTypeFilteringToTerraform, true)(this._ratTypeFiltering.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apn_imsi_filt_action: {
        value: cdktf.stringToHclTerraform(this._apnImsiFiltAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apn_imsi_filtering: {
        value: cdktf.stringToHclTerraform(this._apnImsiFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp_in_gtp_filt_action: {
        value: cdktf.stringToHclTerraform(this._gtpInGtpFiltAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp_in_gtp_filtering: {
        value: cdktf.stringToHclTerraform(this._gtpInGtpFiltering),
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
      message_filt_action: {
        value: cdktf.stringToHclTerraform(this._messageFiltAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_filtering_policy_name: {
        value: cdktf.stringToHclTerraform(this._messageFilteringPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msisdn_filt_action: {
        value: cdktf.stringToHclTerraform(this._msisdnFiltAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msisdn_filtering: {
        value: cdktf.stringToHclTerraform(this._msisdnFiltering),
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
      rat_type_filtering: {
        value: cdktf.listMapperHcl(templateGtpFilteringPolicyRatTypeFilteringToHclTerraform, true)(this._ratTypeFiltering.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateGtpFilteringPolicyRatTypeFilteringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
