// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomControlTopologyPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default action, either `accept` or `reject`
  *   - Choices: `accept`, `reject`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#default_action CustomControlTopologyPolicyDefinition#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#description CustomControlTopologyPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#name CustomControlTopologyPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of sequences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#sequences CustomControlTopologyPolicyDefinition#sequences}
  */
  readonly sequences?: CustomControlTopologyPolicyDefinitionSequences[] | cdktf.IResolvable;
}
export interface CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters {
  /**
  * Community value, e.g. `1000:10000` or `internet` or `local-AS`, Attribute conditional on `type` being equal to `community`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#community CustomControlTopologyPolicyDefinition#community}
  */
  readonly community?: string;
  /**
  * Community additive, Attribute conditional on `type` being equal to `communityAdditive`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#community_additive CustomControlTopologyPolicyDefinition#community_additive}
  */
  readonly communityAdditive?: boolean | cdktf.IResolvable;
  /**
  * OMP tag, Attribute conditional on `type` being equal to `ompTag`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#omp_tag CustomControlTopologyPolicyDefinition#omp_tag}
  */
  readonly ompTag?: number;
  /**
  * Preference, Attribute conditional on `type` being equal to `preference`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#preference CustomControlTopologyPolicyDefinition#preference}
  */
  readonly preference?: number;
  /**
  * Service TLOC color, Attribute conditional on `type` being equal to `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#service_tloc_color CustomControlTopologyPolicyDefinition#service_tloc_color}
  */
  readonly serviceTlocColor?: string;
  /**
  * Service TLOC encapsulation, Attribute conditional on `type` being equal to `service`
  *   - Choices: `ipsec`, `gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#service_tloc_encapsulation CustomControlTopologyPolicyDefinition#service_tloc_encapsulation}
  */
  readonly serviceTlocEncapsulation?: string;
  /**
  * Service TLOC IP address, Attribute conditional on `type` being equal to `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#service_tloc_ip CustomControlTopologyPolicyDefinition#service_tloc_ip}
  */
  readonly serviceTlocIp?: string;
  /**
  * Service TLOC list ID, Attribute conditional on `type` being equal to `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#service_tloc_list_id CustomControlTopologyPolicyDefinition#service_tloc_list_id}
  */
  readonly serviceTlocListId?: string;
  /**
  * Service TLOC list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#service_tloc_list_version CustomControlTopologyPolicyDefinition#service_tloc_list_version}
  */
  readonly serviceTlocListVersion?: number;
  /**
  * Service type, Attribute conditional on `type` being equal to `service`
  *   - Choices: `FW`, `IDP`, `IDS`, `netsvc1`, `netsvc2`, `netsvc3`, `netsvc4`, `netsvc5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#service_type CustomControlTopologyPolicyDefinition#service_type}
  */
  readonly serviceType?: string;
  /**
  * Service VPN ID, Attribute conditional on `type` being equal to `service`
  *   - Range: `0`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#service_vpn_id CustomControlTopologyPolicyDefinition#service_vpn_id}
  */
  readonly serviceVpnId?: number;
  /**
  * TLOC action, Attribute conditional on `type` being equal to `tlocAction`
  *   - Choices: `strict`, `primary`, `backup`, `ecmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_action CustomControlTopologyPolicyDefinition#tloc_action}
  */
  readonly tlocAction?: string;
  /**
  * TLOC color, Attribute conditional on `type` being equal to `tloc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_color CustomControlTopologyPolicyDefinition#tloc_color}
  */
  readonly tlocColor?: string;
  /**
  * TLOC encapsulation, Attribute conditional on `type` being equal to `tloc`
  *   - Choices: `ipsec`, `gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_encapsulation CustomControlTopologyPolicyDefinition#tloc_encapsulation}
  */
  readonly tlocEncapsulation?: string;
  /**
  * TLOC IP address, Attribute conditional on `type` being equal to `tloc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_ip CustomControlTopologyPolicyDefinition#tloc_ip}
  */
  readonly tlocIp?: string;
  /**
  * TLOC list ID, Attribute conditional on `type` being equal to `tlocList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_list_id CustomControlTopologyPolicyDefinition#tloc_list_id}
  */
  readonly tlocListId?: string;
  /**
  * TLOC list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_list_version CustomControlTopologyPolicyDefinition#tloc_list_version}
  */
  readonly tlocListVersion?: number;
  /**
  * Type of set parameter
  *   - Choices: `tlocList`, `tloc`, `tlocAction`, `preference`, `ompTag`, `community`, `communityAdditive`, `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#type CustomControlTopologyPolicyDefinition#type}
  */
  readonly type: string;
}

export function customControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersToTerraform(struct?: CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.stringToTerraform(struct!.community),
    community_additive: cdktf.booleanToTerraform(struct!.communityAdditive),
    omp_tag: cdktf.numberToTerraform(struct!.ompTag),
    preference: cdktf.numberToTerraform(struct!.preference),
    service_tloc_color: cdktf.stringToTerraform(struct!.serviceTlocColor),
    service_tloc_encapsulation: cdktf.stringToTerraform(struct!.serviceTlocEncapsulation),
    service_tloc_ip: cdktf.stringToTerraform(struct!.serviceTlocIp),
    service_tloc_list_id: cdktf.stringToTerraform(struct!.serviceTlocListId),
    service_tloc_list_version: cdktf.numberToTerraform(struct!.serviceTlocListVersion),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    service_vpn_id: cdktf.numberToTerraform(struct!.serviceVpnId),
    tloc_action: cdktf.stringToTerraform(struct!.tlocAction),
    tloc_color: cdktf.stringToTerraform(struct!.tlocColor),
    tloc_encapsulation: cdktf.stringToTerraform(struct!.tlocEncapsulation),
    tloc_ip: cdktf.stringToTerraform(struct!.tlocIp),
    tloc_list_id: cdktf.stringToTerraform(struct!.tlocListId),
    tloc_list_version: cdktf.numberToTerraform(struct!.tlocListVersion),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function customControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform(struct?: CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_additive: {
      value: cdktf.booleanToHclTerraform(struct!.communityAdditive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    omp_tag: {
      value: cdktf.numberToHclTerraform(struct!.ompTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_tloc_color: {
      value: cdktf.stringToHclTerraform(struct!.serviceTlocColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_tloc_encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.serviceTlocEncapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_tloc_ip: {
      value: cdktf.stringToHclTerraform(struct!.serviceTlocIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_tloc_list_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceTlocListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_tloc_list_version: {
      value: cdktf.numberToHclTerraform(struct!.serviceTlocListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.serviceVpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tloc_action: {
      value: cdktf.stringToHclTerraform(struct!.tlocAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_color: {
      value: cdktf.stringToHclTerraform(struct!.tlocColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.tlocEncapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_ip: {
      value: cdktf.stringToHclTerraform(struct!.tlocIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_list_id: {
      value: cdktf.stringToHclTerraform(struct!.tlocListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_list_version: {
      value: cdktf.numberToHclTerraform(struct!.tlocListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._communityAdditive !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityAdditive = this._communityAdditive;
    }
    if (this._ompTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ompTag = this._ompTag;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._serviceTlocColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocColor = this._serviceTlocColor;
    }
    if (this._serviceTlocEncapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocEncapsulation = this._serviceTlocEncapsulation;
    }
    if (this._serviceTlocIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocIp = this._serviceTlocIp;
    }
    if (this._serviceTlocListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocListId = this._serviceTlocListId;
    }
    if (this._serviceTlocListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocListVersion = this._serviceTlocListVersion;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._serviceVpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVpnId = this._serviceVpnId;
    }
    if (this._tlocAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocAction = this._tlocAction;
    }
    if (this._tlocColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocColor = this._tlocColor;
    }
    if (this._tlocEncapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocEncapsulation = this._tlocEncapsulation;
    }
    if (this._tlocIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocIp = this._tlocIp;
    }
    if (this._tlocListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocListId = this._tlocListId;
    }
    if (this._tlocListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocListVersion = this._tlocListVersion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
      this._communityAdditive = undefined;
      this._ompTag = undefined;
      this._preference = undefined;
      this._serviceTlocColor = undefined;
      this._serviceTlocEncapsulation = undefined;
      this._serviceTlocIp = undefined;
      this._serviceTlocListId = undefined;
      this._serviceTlocListVersion = undefined;
      this._serviceType = undefined;
      this._serviceVpnId = undefined;
      this._tlocAction = undefined;
      this._tlocColor = undefined;
      this._tlocEncapsulation = undefined;
      this._tlocIp = undefined;
      this._tlocListId = undefined;
      this._tlocListVersion = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
      this._communityAdditive = value.communityAdditive;
      this._ompTag = value.ompTag;
      this._preference = value.preference;
      this._serviceTlocColor = value.serviceTlocColor;
      this._serviceTlocEncapsulation = value.serviceTlocEncapsulation;
      this._serviceTlocIp = value.serviceTlocIp;
      this._serviceTlocListId = value.serviceTlocListId;
      this._serviceTlocListVersion = value.serviceTlocListVersion;
      this._serviceType = value.serviceType;
      this._serviceVpnId = value.serviceVpnId;
      this._tlocAction = value.tlocAction;
      this._tlocColor = value.tlocColor;
      this._tlocEncapsulation = value.tlocEncapsulation;
      this._tlocIp = value.tlocIp;
      this._tlocListId = value.tlocListId;
      this._tlocListVersion = value.tlocListVersion;
      this._type = value.type;
    }
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // community_additive - computed: false, optional: true, required: false
  private _communityAdditive?: boolean | cdktf.IResolvable; 
  public get communityAdditive() {
    return this.getBooleanAttribute('community_additive');
  }
  public set communityAdditive(value: boolean | cdktf.IResolvable) {
    this._communityAdditive = value;
  }
  public resetCommunityAdditive() {
    this._communityAdditive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityAdditiveInput() {
    return this._communityAdditive;
  }

  // omp_tag - computed: false, optional: true, required: false
  private _ompTag?: number; 
  public get ompTag() {
    return this.getNumberAttribute('omp_tag');
  }
  public set ompTag(value: number) {
    this._ompTag = value;
  }
  public resetOmpTag() {
    this._ompTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompTagInput() {
    return this._ompTag;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // service_tloc_color - computed: false, optional: true, required: false
  private _serviceTlocColor?: string; 
  public get serviceTlocColor() {
    return this.getStringAttribute('service_tloc_color');
  }
  public set serviceTlocColor(value: string) {
    this._serviceTlocColor = value;
  }
  public resetServiceTlocColor() {
    this._serviceTlocColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocColorInput() {
    return this._serviceTlocColor;
  }

  // service_tloc_encapsulation - computed: false, optional: true, required: false
  private _serviceTlocEncapsulation?: string; 
  public get serviceTlocEncapsulation() {
    return this.getStringAttribute('service_tloc_encapsulation');
  }
  public set serviceTlocEncapsulation(value: string) {
    this._serviceTlocEncapsulation = value;
  }
  public resetServiceTlocEncapsulation() {
    this._serviceTlocEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocEncapsulationInput() {
    return this._serviceTlocEncapsulation;
  }

  // service_tloc_ip - computed: false, optional: true, required: false
  private _serviceTlocIp?: string; 
  public get serviceTlocIp() {
    return this.getStringAttribute('service_tloc_ip');
  }
  public set serviceTlocIp(value: string) {
    this._serviceTlocIp = value;
  }
  public resetServiceTlocIp() {
    this._serviceTlocIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocIpInput() {
    return this._serviceTlocIp;
  }

  // service_tloc_list_id - computed: false, optional: true, required: false
  private _serviceTlocListId?: string; 
  public get serviceTlocListId() {
    return this.getStringAttribute('service_tloc_list_id');
  }
  public set serviceTlocListId(value: string) {
    this._serviceTlocListId = value;
  }
  public resetServiceTlocListId() {
    this._serviceTlocListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocListIdInput() {
    return this._serviceTlocListId;
  }

  // service_tloc_list_version - computed: false, optional: true, required: false
  private _serviceTlocListVersion?: number; 
  public get serviceTlocListVersion() {
    return this.getNumberAttribute('service_tloc_list_version');
  }
  public set serviceTlocListVersion(value: number) {
    this._serviceTlocListVersion = value;
  }
  public resetServiceTlocListVersion() {
    this._serviceTlocListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocListVersionInput() {
    return this._serviceTlocListVersion;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // service_vpn_id - computed: false, optional: true, required: false
  private _serviceVpnId?: number; 
  public get serviceVpnId() {
    return this.getNumberAttribute('service_vpn_id');
  }
  public set serviceVpnId(value: number) {
    this._serviceVpnId = value;
  }
  public resetServiceVpnId() {
    this._serviceVpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVpnIdInput() {
    return this._serviceVpnId;
  }

  // tloc_action - computed: false, optional: true, required: false
  private _tlocAction?: string; 
  public get tlocAction() {
    return this.getStringAttribute('tloc_action');
  }
  public set tlocAction(value: string) {
    this._tlocAction = value;
  }
  public resetTlocAction() {
    this._tlocAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocActionInput() {
    return this._tlocAction;
  }

  // tloc_color - computed: false, optional: true, required: false
  private _tlocColor?: string; 
  public get tlocColor() {
    return this.getStringAttribute('tloc_color');
  }
  public set tlocColor(value: string) {
    this._tlocColor = value;
  }
  public resetTlocColor() {
    this._tlocColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocColorInput() {
    return this._tlocColor;
  }

  // tloc_encapsulation - computed: false, optional: true, required: false
  private _tlocEncapsulation?: string; 
  public get tlocEncapsulation() {
    return this.getStringAttribute('tloc_encapsulation');
  }
  public set tlocEncapsulation(value: string) {
    this._tlocEncapsulation = value;
  }
  public resetTlocEncapsulation() {
    this._tlocEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocEncapsulationInput() {
    return this._tlocEncapsulation;
  }

  // tloc_ip - computed: false, optional: true, required: false
  private _tlocIp?: string; 
  public get tlocIp() {
    return this.getStringAttribute('tloc_ip');
  }
  public set tlocIp(value: string) {
    this._tlocIp = value;
  }
  public resetTlocIp() {
    this._tlocIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocIpInput() {
    return this._tlocIp;
  }

  // tloc_list_id - computed: false, optional: true, required: false
  private _tlocListId?: string; 
  public get tlocListId() {
    return this.getStringAttribute('tloc_list_id');
  }
  public set tlocListId(value: string) {
    this._tlocListId = value;
  }
  public resetTlocListId() {
    this._tlocListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocListIdInput() {
    return this._tlocListId;
  }

  // tloc_list_version - computed: false, optional: true, required: false
  private _tlocListVersion?: number; 
  public get tlocListVersion() {
    return this.getNumberAttribute('tloc_list_version');
  }
  public set tlocListVersion(value: number) {
    this._tlocListVersion = value;
  }
  public resetTlocListVersion() {
    this._tlocListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocListVersionInput() {
    return this._tlocListVersion;
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
}

export class CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersList extends cdktf.ComplexList {
  public internalValue? : CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable

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
  public get(index: number): CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersOutputReference {
    return new CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomControlTopologyPolicyDefinitionSequencesActionEntries {
  /**
  * Export to VPN list ID, Attribute conditional on `type` being equal to `exportTo`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#export_to_vpn_list_id CustomControlTopologyPolicyDefinition#export_to_vpn_list_id}
  */
  readonly exportToVpnListId?: string;
  /**
  * Export to VPN list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#export_to_vpn_list_version CustomControlTopologyPolicyDefinition#export_to_vpn_list_version}
  */
  readonly exportToVpnListVersion?: number;
  /**
  * List of set parameters, Attribute conditional on `type` being equal to `set`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#set_parameters CustomControlTopologyPolicyDefinition#set_parameters}
  */
  readonly setParameters?: CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable;
  /**
  * Type of action entry
  *   - Choices: `set`, `exportTo`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#type CustomControlTopologyPolicyDefinition#type}
  */
  readonly type: string;
}

export function customControlTopologyPolicyDefinitionSequencesActionEntriesToTerraform(struct?: CustomControlTopologyPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_to_vpn_list_id: cdktf.stringToTerraform(struct!.exportToVpnListId),
    export_to_vpn_list_version: cdktf.numberToTerraform(struct!.exportToVpnListVersion),
    set_parameters: cdktf.listMapper(customControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersToTerraform, false)(struct!.setParameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function customControlTopologyPolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: CustomControlTopologyPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_to_vpn_list_id: {
      value: cdktf.stringToHclTerraform(struct!.exportToVpnListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_to_vpn_list_version: {
      value: cdktf.numberToHclTerraform(struct!.exportToVpnListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_parameters: {
      value: cdktf.listMapperHcl(customControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform, false)(struct!.setParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomControlTopologyPolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomControlTopologyPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportToVpnListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToVpnListId = this._exportToVpnListId;
    }
    if (this._exportToVpnListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToVpnListVersion = this._exportToVpnListVersion;
    }
    if (this._setParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParameters = this._setParameters?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomControlTopologyPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportToVpnListId = undefined;
      this._exportToVpnListVersion = undefined;
      this._setParameters.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportToVpnListId = value.exportToVpnListId;
      this._exportToVpnListVersion = value.exportToVpnListVersion;
      this._setParameters.internalValue = value.setParameters;
      this._type = value.type;
    }
  }

  // export_to_vpn_list_id - computed: false, optional: true, required: false
  private _exportToVpnListId?: string; 
  public get exportToVpnListId() {
    return this.getStringAttribute('export_to_vpn_list_id');
  }
  public set exportToVpnListId(value: string) {
    this._exportToVpnListId = value;
  }
  public resetExportToVpnListId() {
    this._exportToVpnListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToVpnListIdInput() {
    return this._exportToVpnListId;
  }

  // export_to_vpn_list_version - computed: false, optional: true, required: false
  private _exportToVpnListVersion?: number; 
  public get exportToVpnListVersion() {
    return this.getNumberAttribute('export_to_vpn_list_version');
  }
  public set exportToVpnListVersion(value: number) {
    this._exportToVpnListVersion = value;
  }
  public resetExportToVpnListVersion() {
    this._exportToVpnListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToVpnListVersionInput() {
    return this._exportToVpnListVersion;
  }

  // set_parameters - computed: false, optional: true, required: false
  private _setParameters = new CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersList(this, "set_parameters", false);
  public get setParameters() {
    return this._setParameters;
  }
  public putSetParameters(value: CustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable) {
    this._setParameters.internalValue = value;
  }
  public resetSetParameters() {
    this._setParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParametersInput() {
    return this._setParameters.internalValue;
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
}

export class CustomControlTopologyPolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {
  public internalValue? : CustomControlTopologyPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable

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
  public get(index: number): CustomControlTopologyPolicyDefinitionSequencesActionEntriesOutputReference {
    return new CustomControlTopologyPolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomControlTopologyPolicyDefinitionSequencesMatchEntries {
  /**
  * Carrier, Attribute conditional on `type` being equal to `carrier`
  *   - Choices: `default`, `carrier1`, `carrier2`, `carrier3`, `carrier4`, `carrier5`, `carrier6`, `carrier7`, `carrier8`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#carrier CustomControlTopologyPolicyDefinition#carrier}
  */
  readonly carrier?: string;
  /**
  * Color list ID, Attribute conditional on `type` being equal to `colorList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#color_list_id CustomControlTopologyPolicyDefinition#color_list_id}
  */
  readonly colorListId?: string;
  /**
  * Color list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#color_list_version CustomControlTopologyPolicyDefinition#color_list_version}
  */
  readonly colorListVersion?: number;
  /**
  * Community list ID, Attribute conditional on `type` being equal to `community`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#community_list_id CustomControlTopologyPolicyDefinition#community_list_id}
  */
  readonly communityListId?: string;
  /**
  * Community list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#community_list_version CustomControlTopologyPolicyDefinition#community_list_version}
  */
  readonly communityListVersion?: number;
  /**
  * Domain ID, Attribute conditional on `type` being equal to `domainId`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#domain_id CustomControlTopologyPolicyDefinition#domain_id}
  */
  readonly domainId?: number;
  /**
  * Expanded community list ID, Attribute conditional on `type` being equal to `expandedCommunity`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#expanded_community_list_id CustomControlTopologyPolicyDefinition#expanded_community_list_id}
  */
  readonly expandedCommunityListId?: string;
  /**
  * Expanded community list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#expanded_community_list_version CustomControlTopologyPolicyDefinition#expanded_community_list_version}
  */
  readonly expandedCommunityListVersion?: number;
  /**
  * Group ID, Attribute conditional on `type` being equal to `groupId`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#group_id CustomControlTopologyPolicyDefinition#group_id}
  */
  readonly groupId?: number;
  /**
  * OMP tag, Attribute conditional on `type` being equal to `ompTag`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#omp_tag CustomControlTopologyPolicyDefinition#omp_tag}
  */
  readonly ompTag?: number;
  /**
  * Origin, Attribute conditional on `type` being equal to `origin`
  *   - Choices: `igp`, `egp`, `incomplete`, `aggregrate`, `bgp`, `bgp-external`, `bgp-internal`, `connected`, `eigrp`, `ospf`, `ospf-inter-area`, `ospf-intra-area`, `ospf-external1`, `ospf-external2`, `rip`, `static`, `eigrp-summary`, `eigrp-internal`, `eigrp-external`, `lisp`, `nat-dia`, `natpool`, `isis`, `isis-level1`, `isis-level2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#origin CustomControlTopologyPolicyDefinition#origin}
  */
  readonly origin?: string;
  /**
  * Originator IP, Attribute conditional on `type` being equal to `originator`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#originator CustomControlTopologyPolicyDefinition#originator}
  */
  readonly originator?: string;
  /**
  * Path type, Attribute conditional on `type` being equal to `pathType`
  *   - Choices: `hierarchical-path`, `direct-path`, `transport-gateway-path`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#path_type CustomControlTopologyPolicyDefinition#path_type}
  */
  readonly pathType?: string;
  /**
  * Preference, Attribute conditional on `type` being equal to `preference`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#preference CustomControlTopologyPolicyDefinition#preference}
  */
  readonly preference?: number;
  /**
  * Prefix list ID, Attribute conditional on `type` being equal to `prefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#prefix_list_id CustomControlTopologyPolicyDefinition#prefix_list_id}
  */
  readonly prefixListId?: string;
  /**
  * Prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#prefix_list_version CustomControlTopologyPolicyDefinition#prefix_list_version}
  */
  readonly prefixListVersion?: number;
  /**
  * Region ID, Attribute conditional on `type` being equal to `regionId`
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#region_id CustomControlTopologyPolicyDefinition#region_id}
  */
  readonly regionId?: number;
  /**
  * Region list ID, Attribute conditional on `type` being equal to `regionList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#region_list_id CustomControlTopologyPolicyDefinition#region_list_id}
  */
  readonly regionListId?: string;
  /**
  * Role, Attribute conditional on `type` being equal to `regionId`
  *   - Choices: `border-router`, `edge-router`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#role CustomControlTopologyPolicyDefinition#role}
  */
  readonly role?: string;
  /**
  * Site ID, Attribute conditional on `type` being equal to `siteId`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#site_id CustomControlTopologyPolicyDefinition#site_id}
  */
  readonly siteId?: number;
  /**
  * Site list ID, Attribute conditional on `type` being equal to `siteList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#site_list_id CustomControlTopologyPolicyDefinition#site_list_id}
  */
  readonly siteListId?: string;
  /**
  * Site list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#site_list_version CustomControlTopologyPolicyDefinition#site_list_version}
  */
  readonly siteListVersion?: number;
  /**
  * TLOC color, Attribute conditional on `type` being equal to `tloc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_color CustomControlTopologyPolicyDefinition#tloc_color}
  */
  readonly tlocColor?: string;
  /**
  * TLOC encapsulation, Attribute conditional on `type` being equal to `tloc`
  *   - Choices: `ipsec`, `gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_encapsulation CustomControlTopologyPolicyDefinition#tloc_encapsulation}
  */
  readonly tlocEncapsulation?: string;
  /**
  * TLOC IP address, Attribute conditional on `type` being equal to `tloc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_ip CustomControlTopologyPolicyDefinition#tloc_ip}
  */
  readonly tlocIp?: string;
  /**
  * TLOC list ID, Attribute conditional on `type` being equal to `tlocList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_list_id CustomControlTopologyPolicyDefinition#tloc_list_id}
  */
  readonly tlocListId?: string;
  /**
  * TLOC list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#tloc_list_version CustomControlTopologyPolicyDefinition#tloc_list_version}
  */
  readonly tlocListVersion?: number;
  /**
  * Type of match entry
  *   - Choices: `colorList`, `community`, `expandedCommunity`, `ompTag`, `origin`, `originator`, `preference`, `siteList`, `pathType`, `tlocList`, `vpnList`, `prefixList`, `vpn`, `tloc`, `siteId`, `carrier`, `domainId`, `groupId`, `regionId`, `role`, `regionList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#type CustomControlTopologyPolicyDefinition#type}
  */
  readonly type: string;
  /**
  * VPN ID, Attribute conditional on `type` being equal to `vpn`
  *   - Range: `0`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#vpn_id CustomControlTopologyPolicyDefinition#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * VPN list ID, Attribute conditional on `type` being equal to `vpnList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#vpn_list_id CustomControlTopologyPolicyDefinition#vpn_list_id}
  */
  readonly vpnListId?: string;
  /**
  * VPN list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#vpn_list_version CustomControlTopologyPolicyDefinition#vpn_list_version}
  */
  readonly vpnListVersion?: number;
}

export function customControlTopologyPolicyDefinitionSequencesMatchEntriesToTerraform(struct?: CustomControlTopologyPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    carrier: cdktf.stringToTerraform(struct!.carrier),
    color_list_id: cdktf.stringToTerraform(struct!.colorListId),
    color_list_version: cdktf.numberToTerraform(struct!.colorListVersion),
    community_list_id: cdktf.stringToTerraform(struct!.communityListId),
    community_list_version: cdktf.numberToTerraform(struct!.communityListVersion),
    domain_id: cdktf.numberToTerraform(struct!.domainId),
    expanded_community_list_id: cdktf.stringToTerraform(struct!.expandedCommunityListId),
    expanded_community_list_version: cdktf.numberToTerraform(struct!.expandedCommunityListVersion),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    omp_tag: cdktf.numberToTerraform(struct!.ompTag),
    origin: cdktf.stringToTerraform(struct!.origin),
    originator: cdktf.stringToTerraform(struct!.originator),
    path_type: cdktf.stringToTerraform(struct!.pathType),
    preference: cdktf.numberToTerraform(struct!.preference),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
    prefix_list_version: cdktf.numberToTerraform(struct!.prefixListVersion),
    region_id: cdktf.numberToTerraform(struct!.regionId),
    region_list_id: cdktf.stringToTerraform(struct!.regionListId),
    role: cdktf.stringToTerraform(struct!.role),
    site_id: cdktf.numberToTerraform(struct!.siteId),
    site_list_id: cdktf.stringToTerraform(struct!.siteListId),
    site_list_version: cdktf.numberToTerraform(struct!.siteListVersion),
    tloc_color: cdktf.stringToTerraform(struct!.tlocColor),
    tloc_encapsulation: cdktf.stringToTerraform(struct!.tlocEncapsulation),
    tloc_ip: cdktf.stringToTerraform(struct!.tlocIp),
    tloc_list_id: cdktf.stringToTerraform(struct!.tlocListId),
    tloc_list_version: cdktf.numberToTerraform(struct!.tlocListVersion),
    type: cdktf.stringToTerraform(struct!.type),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_list_id: cdktf.stringToTerraform(struct!.vpnListId),
    vpn_list_version: cdktf.numberToTerraform(struct!.vpnListVersion),
  }
}


export function customControlTopologyPolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: CustomControlTopologyPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    carrier: {
      value: cdktf.stringToHclTerraform(struct!.carrier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_list_id: {
      value: cdktf.stringToHclTerraform(struct!.colorListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_list_version: {
      value: cdktf.numberToHclTerraform(struct!.colorListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    community_list_id: {
      value: cdktf.stringToHclTerraform(struct!.communityListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_list_version: {
      value: cdktf.numberToHclTerraform(struct!.communityListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_id: {
      value: cdktf.numberToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expanded_community_list_id: {
      value: cdktf.stringToHclTerraform(struct!.expandedCommunityListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expanded_community_list_version: {
      value: cdktf.numberToHclTerraform(struct!.expandedCommunityListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    omp_tag: {
      value: cdktf.numberToHclTerraform(struct!.ompTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    originator: {
      value: cdktf.stringToHclTerraform(struct!.originator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_type: {
      value: cdktf.stringToHclTerraform(struct!.pathType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.prefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.prefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_id: {
      value: cdktf.numberToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_list_id: {
      value: cdktf.stringToHclTerraform(struct!.regionListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.numberToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_list_id: {
      value: cdktf.stringToHclTerraform(struct!.siteListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_list_version: {
      value: cdktf.numberToHclTerraform(struct!.siteListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tloc_color: {
      value: cdktf.stringToHclTerraform(struct!.tlocColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.tlocEncapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_ip: {
      value: cdktf.stringToHclTerraform(struct!.tlocIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_list_id: {
      value: cdktf.stringToHclTerraform(struct!.tlocListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_list_version: {
      value: cdktf.numberToHclTerraform(struct!.tlocListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_list_id: {
      value: cdktf.stringToHclTerraform(struct!.vpnListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_list_version: {
      value: cdktf.numberToHclTerraform(struct!.vpnListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomControlTopologyPolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomControlTopologyPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._carrier !== undefined) {
      hasAnyValues = true;
      internalValueResult.carrier = this._carrier;
    }
    if (this._colorListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorListId = this._colorListId;
    }
    if (this._colorListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorListVersion = this._colorListVersion;
    }
    if (this._communityListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityListId = this._communityListId;
    }
    if (this._communityListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityListVersion = this._communityListVersion;
    }
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._expandedCommunityListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedCommunityListId = this._expandedCommunityListId;
    }
    if (this._expandedCommunityListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedCommunityListVersion = this._expandedCommunityListVersion;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._ompTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ompTag = this._ompTag;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._originator !== undefined) {
      hasAnyValues = true;
      internalValueResult.originator = this._originator;
    }
    if (this._pathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathType = this._pathType;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._prefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListId = this._prefixListId;
    }
    if (this._prefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListVersion = this._prefixListVersion;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._regionListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionListId = this._regionListId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._siteListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListId = this._siteListId;
    }
    if (this._siteListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListVersion = this._siteListVersion;
    }
    if (this._tlocColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocColor = this._tlocColor;
    }
    if (this._tlocEncapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocEncapsulation = this._tlocEncapsulation;
    }
    if (this._tlocIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocIp = this._tlocIp;
    }
    if (this._tlocListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocListId = this._tlocListId;
    }
    if (this._tlocListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocListVersion = this._tlocListVersion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnListId = this._vpnListId;
    }
    if (this._vpnListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnListVersion = this._vpnListVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomControlTopologyPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._carrier = undefined;
      this._colorListId = undefined;
      this._colorListVersion = undefined;
      this._communityListId = undefined;
      this._communityListVersion = undefined;
      this._domainId = undefined;
      this._expandedCommunityListId = undefined;
      this._expandedCommunityListVersion = undefined;
      this._groupId = undefined;
      this._ompTag = undefined;
      this._origin = undefined;
      this._originator = undefined;
      this._pathType = undefined;
      this._preference = undefined;
      this._prefixListId = undefined;
      this._prefixListVersion = undefined;
      this._regionId = undefined;
      this._regionListId = undefined;
      this._role = undefined;
      this._siteId = undefined;
      this._siteListId = undefined;
      this._siteListVersion = undefined;
      this._tlocColor = undefined;
      this._tlocEncapsulation = undefined;
      this._tlocIp = undefined;
      this._tlocListId = undefined;
      this._tlocListVersion = undefined;
      this._type = undefined;
      this._vpnId = undefined;
      this._vpnListId = undefined;
      this._vpnListVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._carrier = value.carrier;
      this._colorListId = value.colorListId;
      this._colorListVersion = value.colorListVersion;
      this._communityListId = value.communityListId;
      this._communityListVersion = value.communityListVersion;
      this._domainId = value.domainId;
      this._expandedCommunityListId = value.expandedCommunityListId;
      this._expandedCommunityListVersion = value.expandedCommunityListVersion;
      this._groupId = value.groupId;
      this._ompTag = value.ompTag;
      this._origin = value.origin;
      this._originator = value.originator;
      this._pathType = value.pathType;
      this._preference = value.preference;
      this._prefixListId = value.prefixListId;
      this._prefixListVersion = value.prefixListVersion;
      this._regionId = value.regionId;
      this._regionListId = value.regionListId;
      this._role = value.role;
      this._siteId = value.siteId;
      this._siteListId = value.siteListId;
      this._siteListVersion = value.siteListVersion;
      this._tlocColor = value.tlocColor;
      this._tlocEncapsulation = value.tlocEncapsulation;
      this._tlocIp = value.tlocIp;
      this._tlocListId = value.tlocListId;
      this._tlocListVersion = value.tlocListVersion;
      this._type = value.type;
      this._vpnId = value.vpnId;
      this._vpnListId = value.vpnListId;
      this._vpnListVersion = value.vpnListVersion;
    }
  }

  // carrier - computed: false, optional: true, required: false
  private _carrier?: string; 
  public get carrier() {
    return this.getStringAttribute('carrier');
  }
  public set carrier(value: string) {
    this._carrier = value;
  }
  public resetCarrier() {
    this._carrier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierInput() {
    return this._carrier;
  }

  // color_list_id - computed: false, optional: true, required: false
  private _colorListId?: string; 
  public get colorListId() {
    return this.getStringAttribute('color_list_id');
  }
  public set colorListId(value: string) {
    this._colorListId = value;
  }
  public resetColorListId() {
    this._colorListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorListIdInput() {
    return this._colorListId;
  }

  // color_list_version - computed: false, optional: true, required: false
  private _colorListVersion?: number; 
  public get colorListVersion() {
    return this.getNumberAttribute('color_list_version');
  }
  public set colorListVersion(value: number) {
    this._colorListVersion = value;
  }
  public resetColorListVersion() {
    this._colorListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorListVersionInput() {
    return this._colorListVersion;
  }

  // community_list_id - computed: false, optional: true, required: false
  private _communityListId?: string; 
  public get communityListId() {
    return this.getStringAttribute('community_list_id');
  }
  public set communityListId(value: string) {
    this._communityListId = value;
  }
  public resetCommunityListId() {
    this._communityListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityListIdInput() {
    return this._communityListId;
  }

  // community_list_version - computed: false, optional: true, required: false
  private _communityListVersion?: number; 
  public get communityListVersion() {
    return this.getNumberAttribute('community_list_version');
  }
  public set communityListVersion(value: number) {
    this._communityListVersion = value;
  }
  public resetCommunityListVersion() {
    this._communityListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityListVersionInput() {
    return this._communityListVersion;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // expanded_community_list_id - computed: false, optional: true, required: false
  private _expandedCommunityListId?: string; 
  public get expandedCommunityListId() {
    return this.getStringAttribute('expanded_community_list_id');
  }
  public set expandedCommunityListId(value: string) {
    this._expandedCommunityListId = value;
  }
  public resetExpandedCommunityListId() {
    this._expandedCommunityListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedCommunityListIdInput() {
    return this._expandedCommunityListId;
  }

  // expanded_community_list_version - computed: false, optional: true, required: false
  private _expandedCommunityListVersion?: number; 
  public get expandedCommunityListVersion() {
    return this.getNumberAttribute('expanded_community_list_version');
  }
  public set expandedCommunityListVersion(value: number) {
    this._expandedCommunityListVersion = value;
  }
  public resetExpandedCommunityListVersion() {
    this._expandedCommunityListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedCommunityListVersionInput() {
    return this._expandedCommunityListVersion;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // omp_tag - computed: false, optional: true, required: false
  private _ompTag?: number; 
  public get ompTag() {
    return this.getNumberAttribute('omp_tag');
  }
  public set ompTag(value: number) {
    this._ompTag = value;
  }
  public resetOmpTag() {
    this._ompTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompTagInput() {
    return this._ompTag;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // originator - computed: false, optional: true, required: false
  private _originator?: string; 
  public get originator() {
    return this.getStringAttribute('originator');
  }
  public set originator(value: string) {
    this._originator = value;
  }
  public resetOriginator() {
    this._originator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorInput() {
    return this._originator;
  }

  // path_type - computed: false, optional: true, required: false
  private _pathType?: string; 
  public get pathType() {
    return this.getStringAttribute('path_type');
  }
  public set pathType(value: string) {
    this._pathType = value;
  }
  public resetPathType() {
    this._pathType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: string; 
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }
  public set prefixListId(value: string) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // prefix_list_version - computed: false, optional: true, required: false
  private _prefixListVersion?: number; 
  public get prefixListVersion() {
    return this.getNumberAttribute('prefix_list_version');
  }
  public set prefixListVersion(value: number) {
    this._prefixListVersion = value;
  }
  public resetPrefixListVersion() {
    this._prefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListVersionInput() {
    return this._prefixListVersion;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_list_id - computed: false, optional: true, required: false
  private _regionListId?: string; 
  public get regionListId() {
    return this.getStringAttribute('region_list_id');
  }
  public set regionListId(value: string) {
    this._regionListId = value;
  }
  public resetRegionListId() {
    this._regionListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListIdInput() {
    return this._regionListId;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_list_id - computed: false, optional: true, required: false
  private _siteListId?: string; 
  public get siteListId() {
    return this.getStringAttribute('site_list_id');
  }
  public set siteListId(value: string) {
    this._siteListId = value;
  }
  public resetSiteListId() {
    this._siteListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteListIdInput() {
    return this._siteListId;
  }

  // site_list_version - computed: false, optional: true, required: false
  private _siteListVersion?: number; 
  public get siteListVersion() {
    return this.getNumberAttribute('site_list_version');
  }
  public set siteListVersion(value: number) {
    this._siteListVersion = value;
  }
  public resetSiteListVersion() {
    this._siteListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteListVersionInput() {
    return this._siteListVersion;
  }

  // tloc_color - computed: false, optional: true, required: false
  private _tlocColor?: string; 
  public get tlocColor() {
    return this.getStringAttribute('tloc_color');
  }
  public set tlocColor(value: string) {
    this._tlocColor = value;
  }
  public resetTlocColor() {
    this._tlocColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocColorInput() {
    return this._tlocColor;
  }

  // tloc_encapsulation - computed: false, optional: true, required: false
  private _tlocEncapsulation?: string; 
  public get tlocEncapsulation() {
    return this.getStringAttribute('tloc_encapsulation');
  }
  public set tlocEncapsulation(value: string) {
    this._tlocEncapsulation = value;
  }
  public resetTlocEncapsulation() {
    this._tlocEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocEncapsulationInput() {
    return this._tlocEncapsulation;
  }

  // tloc_ip - computed: false, optional: true, required: false
  private _tlocIp?: string; 
  public get tlocIp() {
    return this.getStringAttribute('tloc_ip');
  }
  public set tlocIp(value: string) {
    this._tlocIp = value;
  }
  public resetTlocIp() {
    this._tlocIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocIpInput() {
    return this._tlocIp;
  }

  // tloc_list_id - computed: false, optional: true, required: false
  private _tlocListId?: string; 
  public get tlocListId() {
    return this.getStringAttribute('tloc_list_id');
  }
  public set tlocListId(value: string) {
    this._tlocListId = value;
  }
  public resetTlocListId() {
    this._tlocListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocListIdInput() {
    return this._tlocListId;
  }

  // tloc_list_version - computed: false, optional: true, required: false
  private _tlocListVersion?: number; 
  public get tlocListVersion() {
    return this.getNumberAttribute('tloc_list_version');
  }
  public set tlocListVersion(value: number) {
    this._tlocListVersion = value;
  }
  public resetTlocListVersion() {
    this._tlocListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocListVersionInput() {
    return this._tlocListVersion;
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

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_list_id - computed: false, optional: true, required: false
  private _vpnListId?: string; 
  public get vpnListId() {
    return this.getStringAttribute('vpn_list_id');
  }
  public set vpnListId(value: string) {
    this._vpnListId = value;
  }
  public resetVpnListId() {
    this._vpnListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnListIdInput() {
    return this._vpnListId;
  }

  // vpn_list_version - computed: false, optional: true, required: false
  private _vpnListVersion?: number; 
  public get vpnListVersion() {
    return this.getNumberAttribute('vpn_list_version');
  }
  public set vpnListVersion(value: number) {
    this._vpnListVersion = value;
  }
  public resetVpnListVersion() {
    this._vpnListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnListVersionInput() {
    return this._vpnListVersion;
  }
}

export class CustomControlTopologyPolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : CustomControlTopologyPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): CustomControlTopologyPolicyDefinitionSequencesMatchEntriesOutputReference {
    return new CustomControlTopologyPolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomControlTopologyPolicyDefinitionSequences {
  /**
  * List of action entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#action_entries CustomControlTopologyPolicyDefinition#action_entries}
  */
  readonly actionEntries?: CustomControlTopologyPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable;
  /**
  * Base action, either `accept` or `reject`
  *   - Choices: `accept`, `reject`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#base_action CustomControlTopologyPolicyDefinition#base_action}
  */
  readonly baseAction?: string;
  /**
  * Sequence ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#id CustomControlTopologyPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Sequence IP type, either `ipv4`, `ipv6` or `all`
  *   - Choices: `ipv4`, `ipv6`, `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#ip_type CustomControlTopologyPolicyDefinition#ip_type}
  */
  readonly ipType?: string;
  /**
  * List of match entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#match_entries CustomControlTopologyPolicyDefinition#match_entries}
  */
  readonly matchEntries?: CustomControlTopologyPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable;
  /**
  * Sequence name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#name CustomControlTopologyPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * Sequence type, either `route` or `tloc`
  *   - Choices: `route`, `tloc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#type CustomControlTopologyPolicyDefinition#type}
  */
  readonly type?: string;
}

export function customControlTopologyPolicyDefinitionSequencesToTerraform(struct?: CustomControlTopologyPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_entries: cdktf.listMapper(customControlTopologyPolicyDefinitionSequencesActionEntriesToTerraform, false)(struct!.actionEntries),
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    id: cdktf.numberToTerraform(struct!.id),
    ip_type: cdktf.stringToTerraform(struct!.ipType),
    match_entries: cdktf.listMapper(customControlTopologyPolicyDefinitionSequencesMatchEntriesToTerraform, false)(struct!.matchEntries),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function customControlTopologyPolicyDefinitionSequencesToHclTerraform(struct?: CustomControlTopologyPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_entries: {
      value: cdktf.listMapperHcl(customControlTopologyPolicyDefinitionSequencesActionEntriesToHclTerraform, false)(struct!.actionEntries),
      isBlock: true,
      type: "set",
      storageClassType: "CustomControlTopologyPolicyDefinitionSequencesActionEntriesList",
    },
    base_action: {
      value: cdktf.stringToHclTerraform(struct!.baseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_type: {
      value: cdktf.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_entries: {
      value: cdktf.listMapperHcl(customControlTopologyPolicyDefinitionSequencesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "set",
      storageClassType: "CustomControlTopologyPolicyDefinitionSequencesMatchEntriesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomControlTopologyPolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomControlTopologyPolicyDefinitionSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionEntries = this._actionEntries?.internalValue;
    }
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomControlTopologyPolicyDefinitionSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = undefined;
      this._baseAction = undefined;
      this._id = undefined;
      this._ipType = undefined;
      this._matchEntries.internalValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = value.actionEntries;
      this._baseAction = value.baseAction;
      this._id = value.id;
      this._ipType = value.ipType;
      this._matchEntries.internalValue = value.matchEntries;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // action_entries - computed: false, optional: true, required: false
  private _actionEntries = new CustomControlTopologyPolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
  }
  public putActionEntries(value: CustomControlTopologyPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable) {
    this._actionEntries.internalValue = value;
  }
  public resetActionEntries() {
    this._actionEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEntriesInput() {
    return this._actionEntries.internalValue;
  }

  // base_action - computed: false, optional: true, required: false
  private _baseAction?: string; 
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }
  public set baseAction(value: string) {
    this._baseAction = value;
  }
  public resetBaseAction() {
    this._baseAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseActionInput() {
    return this._baseAction;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new CustomControlTopologyPolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: CustomControlTopologyPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CustomControlTopologyPolicyDefinitionSequencesList extends cdktf.ComplexList {
  public internalValue? : CustomControlTopologyPolicyDefinitionSequences[] | cdktf.IResolvable

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
  public get(index: number): CustomControlTopologyPolicyDefinitionSequencesOutputReference {
    return new CustomControlTopologyPolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition sdwan_custom_control_topology_policy_definition}
*/
export class CustomControlTopologyPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_custom_control_topology_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomControlTopologyPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomControlTopologyPolicyDefinition to import
  * @param importFromId The id of the existing CustomControlTopologyPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomControlTopologyPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_custom_control_topology_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/custom_control_topology_policy_definition sdwan_custom_control_topology_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomControlTopologyPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: CustomControlTopologyPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_custom_control_topology_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAction = config.defaultAction;
    this._description = config.description;
    this._name = config.name;
    this._sequences.internalValue = config.sequences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sequences - computed: false, optional: true, required: false
  private _sequences = new CustomControlTopologyPolicyDefinitionSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: CustomControlTopologyPolicyDefinitionSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  public resetSequences() {
    this._sequences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action: cdktf.stringToTerraform(this._defaultAction),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      sequences: cdktf.listMapper(customControlTopologyPolicyDefinitionSequencesToTerraform, false)(this._sequences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequences: {
        value: cdktf.listMapperHcl(customControlTopologyPolicyDefinitionSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomControlTopologyPolicyDefinitionSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
