// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPrivateNatGatewayTranslationNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule#id VpcPrivateNatGatewayTranslationNatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Private NAT gateway unique ID, such as: `intranat-xxxxxxxx`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule#nat_gateway_id VpcPrivateNatGatewayTranslationNatRule#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * translation_nat_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule#translation_nat_rules VpcPrivateNatGatewayTranslationNatRule#translation_nat_rules}
  */
  readonly translationNatRules: VpcPrivateNatGatewayTranslationNatRuleTranslationNatRules[] | cdktf.IResolvable;
}
export interface VpcPrivateNatGatewayTranslationNatRuleTranslationNatRules {
  /**
  * Translation rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule#description VpcPrivateNatGatewayTranslationNatRule#description}
  */
  readonly description: string;
  /**
  * Source IP, valid when translation rule type is network layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule#original_ip VpcPrivateNatGatewayTranslationNatRule#original_ip}
  */
  readonly originalIp?: string;
  /**
  * Translation rule target, optional values "LOCAL","PEER".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule#translation_direction VpcPrivateNatGatewayTranslationNatRule#translation_direction}
  */
  readonly translationDirection: string;
  /**
  * Translation IP, when translation rule type is transport layer, it is an IP pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule#translation_ip VpcPrivateNatGatewayTranslationNatRule#translation_ip}
  */
  readonly translationIp: string;
  /**
  * Translation rule type, optional values "NETWORK_LAYER","TRANSPORT_LAYER".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule#translation_type VpcPrivateNatGatewayTranslationNatRule#translation_type}
  */
  readonly translationType: string;
}

export function vpcPrivateNatGatewayTranslationNatRuleTranslationNatRulesToTerraform(struct?: VpcPrivateNatGatewayTranslationNatRuleTranslationNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    original_ip: cdktf.stringToTerraform(struct!.originalIp),
    translation_direction: cdktf.stringToTerraform(struct!.translationDirection),
    translation_ip: cdktf.stringToTerraform(struct!.translationIp),
    translation_type: cdktf.stringToTerraform(struct!.translationType),
  }
}


export function vpcPrivateNatGatewayTranslationNatRuleTranslationNatRulesToHclTerraform(struct?: VpcPrivateNatGatewayTranslationNatRuleTranslationNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_ip: {
      value: cdktf.stringToHclTerraform(struct!.originalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translation_direction: {
      value: cdktf.stringToHclTerraform(struct!.translationDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translation_ip: {
      value: cdktf.stringToHclTerraform(struct!.translationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translation_type: {
      value: cdktf.stringToHclTerraform(struct!.translationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcPrivateNatGatewayTranslationNatRuleTranslationNatRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcPrivateNatGatewayTranslationNatRuleTranslationNatRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._originalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalIp = this._originalIp;
    }
    if (this._translationDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.translationDirection = this._translationDirection;
    }
    if (this._translationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.translationIp = this._translationIp;
    }
    if (this._translationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.translationType = this._translationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPrivateNatGatewayTranslationNatRuleTranslationNatRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._originalIp = undefined;
      this._translationDirection = undefined;
      this._translationIp = undefined;
      this._translationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._originalIp = value.originalIp;
      this._translationDirection = value.translationDirection;
      this._translationIp = value.translationIp;
      this._translationType = value.translationType;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // original_ip - computed: false, optional: true, required: false
  private _originalIp?: string; 
  public get originalIp() {
    return this.getStringAttribute('original_ip');
  }
  public set originalIp(value: string) {
    this._originalIp = value;
  }
  public resetOriginalIp() {
    this._originalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalIpInput() {
    return this._originalIp;
  }

  // translation_direction - computed: false, optional: false, required: true
  private _translationDirection?: string; 
  public get translationDirection() {
    return this.getStringAttribute('translation_direction');
  }
  public set translationDirection(value: string) {
    this._translationDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get translationDirectionInput() {
    return this._translationDirection;
  }

  // translation_ip - computed: false, optional: false, required: true
  private _translationIp?: string; 
  public get translationIp() {
    return this.getStringAttribute('translation_ip');
  }
  public set translationIp(value: string) {
    this._translationIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get translationIpInput() {
    return this._translationIp;
  }

  // translation_type - computed: false, optional: false, required: true
  private _translationType?: string; 
  public get translationType() {
    return this.getStringAttribute('translation_type');
  }
  public set translationType(value: string) {
    this._translationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get translationTypeInput() {
    return this._translationType;
  }
}

export class VpcPrivateNatGatewayTranslationNatRuleTranslationNatRulesList extends cdktf.ComplexList {
  public internalValue? : VpcPrivateNatGatewayTranslationNatRuleTranslationNatRules[] | cdktf.IResolvable

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
  public get(index: number): VpcPrivateNatGatewayTranslationNatRuleTranslationNatRulesOutputReference {
    return new VpcPrivateNatGatewayTranslationNatRuleTranslationNatRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule tencentcloud_vpc_private_nat_gateway_translation_nat_rule}
*/
export class VpcPrivateNatGatewayTranslationNatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_private_nat_gateway_translation_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPrivateNatGatewayTranslationNatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPrivateNatGatewayTranslationNatRule to import
  * @param importFromId The id of the existing VpcPrivateNatGatewayTranslationNatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPrivateNatGatewayTranslationNatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_private_nat_gateway_translation_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway_translation_nat_rule tencentcloud_vpc_private_nat_gateway_translation_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPrivateNatGatewayTranslationNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPrivateNatGatewayTranslationNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_private_nat_gateway_translation_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
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
    this._natGatewayId = config.natGatewayId;
    this._translationNatRules.internalValue = config.translationNatRules;
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

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // translation_nat_rules - computed: false, optional: false, required: true
  private _translationNatRules = new VpcPrivateNatGatewayTranslationNatRuleTranslationNatRulesList(this, "translation_nat_rules", true);
  public get translationNatRules() {
    return this._translationNatRules;
  }
  public putTranslationNatRules(value: VpcPrivateNatGatewayTranslationNatRuleTranslationNatRules[] | cdktf.IResolvable) {
    this._translationNatRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get translationNatRulesInput() {
    return this._translationNatRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      translation_nat_rules: cdktf.listMapper(vpcPrivateNatGatewayTranslationNatRuleTranslationNatRulesToTerraform, true)(this._translationNatRules.internalValue),
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
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translation_nat_rules: {
        value: cdktf.listMapperHcl(vpcPrivateNatGatewayTranslationNatRuleTranslationNatRulesToHclTerraform, true)(this._translationNatRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcPrivateNatGatewayTranslationNatRuleTranslationNatRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
