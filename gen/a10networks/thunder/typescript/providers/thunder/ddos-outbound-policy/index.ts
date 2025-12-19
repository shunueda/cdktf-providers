// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosOutboundPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#id DdosOutboundPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#name DdosOutboundPolicy#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#user_tag DdosOutboundPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#uuid DdosOutboundPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * asn_based_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#asn_based_tracking DdosOutboundPolicy#asn_based_tracking}
  */
  readonly asnBasedTracking?: DdosOutboundPolicyAsnBasedTracking;
  /**
  * country_based_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#country_based_tracking DdosOutboundPolicy#country_based_tracking}
  */
  readonly countryBasedTracking?: DdosOutboundPolicyCountryBasedTracking;
  /**
  * policy_class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#policy_class_list_list DdosOutboundPolicy#policy_class_list_list}
  */
  readonly policyClassListList?: DdosOutboundPolicyPolicyClassListListStruct[] | cdktf.IResolvable;
  /**
  * policy_default_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#policy_default_class_list DdosOutboundPolicy#policy_default_class_list}
  */
  readonly policyDefaultClassList?: DdosOutboundPolicyPolicyDefaultClassListStruct;
}
export interface DdosOutboundPolicyAsnBasedTracking {
  /**
  * 'configuration': Configure asn based tracking;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#configuration DdosOutboundPolicy#configuration}
  */
  readonly configuration?: string;
  /**
  * Triggered by 1/2 packet rate limitation in per-asn-glid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#packet_rate_triggered DdosOutboundPolicy#packet_rate_triggered}
  */
  readonly packetRateTriggered?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#per_asn_glid DdosOutboundPolicy#per_asn_glid}
  */
  readonly perAsnGlid?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#uuid DdosOutboundPolicy#uuid}
  */
  readonly uuid?: string;
}

export function ddosOutboundPolicyAsnBasedTrackingToTerraform(struct?: DdosOutboundPolicyAsnBasedTrackingOutputReference | DdosOutboundPolicyAsnBasedTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    packet_rate_triggered: cdktf.numberToTerraform(struct!.packetRateTriggered),
    per_asn_glid: cdktf.stringToTerraform(struct!.perAsnGlid),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosOutboundPolicyAsnBasedTrackingToHclTerraform(struct?: DdosOutboundPolicyAsnBasedTrackingOutputReference | DdosOutboundPolicyAsnBasedTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate_triggered: {
      value: cdktf.numberToHclTerraform(struct!.packetRateTriggered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_asn_glid: {
      value: cdktf.stringToHclTerraform(struct!.perAsnGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DdosOutboundPolicyAsnBasedTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosOutboundPolicyAsnBasedTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._packetRateTriggered !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateTriggered = this._packetRateTriggered;
    }
    if (this._perAsnGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.perAsnGlid = this._perAsnGlid;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosOutboundPolicyAsnBasedTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._packetRateTriggered = undefined;
      this._perAsnGlid = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._packetRateTriggered = value.packetRateTriggered;
      this._perAsnGlid = value.perAsnGlid;
      this._uuid = value.uuid;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // packet_rate_triggered - computed: false, optional: true, required: false
  private _packetRateTriggered?: number; 
  public get packetRateTriggered() {
    return this.getNumberAttribute('packet_rate_triggered');
  }
  public set packetRateTriggered(value: number) {
    this._packetRateTriggered = value;
  }
  public resetPacketRateTriggered() {
    this._packetRateTriggered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateTriggeredInput() {
    return this._packetRateTriggered;
  }

  // per_asn_glid - computed: false, optional: true, required: false
  private _perAsnGlid?: string; 
  public get perAsnGlid() {
    return this.getStringAttribute('per_asn_glid');
  }
  public set perAsnGlid(value: string) {
    this._perAsnGlid = value;
  }
  public resetPerAsnGlid() {
    this._perAsnGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perAsnGlidInput() {
    return this._perAsnGlid;
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
export interface DdosOutboundPolicyCountryBasedTracking {
  /**
  * 'configuration': Configure country based tracking;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#configuration DdosOutboundPolicy#configuration}
  */
  readonly configuration?: string;
  /**
  * Triggered by 1/2 packet rate limitation in per-country-glid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#packet_rate_triggered DdosOutboundPolicy#packet_rate_triggered}
  */
  readonly packetRateTriggered?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#per_country_glid DdosOutboundPolicy#per_country_glid}
  */
  readonly perCountryGlid?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#uuid DdosOutboundPolicy#uuid}
  */
  readonly uuid?: string;
}

export function ddosOutboundPolicyCountryBasedTrackingToTerraform(struct?: DdosOutboundPolicyCountryBasedTrackingOutputReference | DdosOutboundPolicyCountryBasedTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    packet_rate_triggered: cdktf.numberToTerraform(struct!.packetRateTriggered),
    per_country_glid: cdktf.stringToTerraform(struct!.perCountryGlid),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosOutboundPolicyCountryBasedTrackingToHclTerraform(struct?: DdosOutboundPolicyCountryBasedTrackingOutputReference | DdosOutboundPolicyCountryBasedTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate_triggered: {
      value: cdktf.numberToHclTerraform(struct!.packetRateTriggered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_country_glid: {
      value: cdktf.stringToHclTerraform(struct!.perCountryGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DdosOutboundPolicyCountryBasedTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosOutboundPolicyCountryBasedTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._packetRateTriggered !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateTriggered = this._packetRateTriggered;
    }
    if (this._perCountryGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.perCountryGlid = this._perCountryGlid;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosOutboundPolicyCountryBasedTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._packetRateTriggered = undefined;
      this._perCountryGlid = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._packetRateTriggered = value.packetRateTriggered;
      this._perCountryGlid = value.perCountryGlid;
      this._uuid = value.uuid;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // packet_rate_triggered - computed: false, optional: true, required: false
  private _packetRateTriggered?: number; 
  public get packetRateTriggered() {
    return this.getNumberAttribute('packet_rate_triggered');
  }
  public set packetRateTriggered(value: number) {
    this._packetRateTriggered = value;
  }
  public resetPacketRateTriggered() {
    this._packetRateTriggered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateTriggeredInput() {
    return this._packetRateTriggered;
  }

  // per_country_glid - computed: false, optional: true, required: false
  private _perCountryGlid?: string; 
  public get perCountryGlid() {
    return this.getStringAttribute('per_country_glid');
  }
  public set perCountryGlid(value: string) {
    this._perCountryGlid = value;
  }
  public resetPerCountryGlid() {
    this._perCountryGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perCountryGlidInput() {
    return this._perCountryGlid;
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
export interface DdosOutboundPolicyPolicyClassListListStruct {
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#class_list_glid DdosOutboundPolicy#class_list_glid}
  */
  readonly classListGlid?: string;
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#class_list_name DdosOutboundPolicy#class_list_name}
  */
  readonly classListName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#user_tag DdosOutboundPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#uuid DdosOutboundPolicy#uuid}
  */
  readonly uuid?: string;
}

export function ddosOutboundPolicyPolicyClassListListStructToTerraform(struct?: DdosOutboundPolicyPolicyClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list_glid: cdktf.stringToTerraform(struct!.classListGlid),
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosOutboundPolicyPolicyClassListListStructToHclTerraform(struct?: DdosOutboundPolicyPolicyClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list_glid: {
      value: cdktf.stringToHclTerraform(struct!.classListGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.classListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DdosOutboundPolicyPolicyClassListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosOutboundPolicyPolicyClassListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classListGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListGlid = this._classListGlid;
    }
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosOutboundPolicyPolicyClassListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classListGlid = undefined;
      this._classListName = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classListGlid = value.classListGlid;
      this._classListName = value.classListName;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // class_list_glid - computed: false, optional: true, required: false
  private _classListGlid?: string; 
  public get classListGlid() {
    return this.getStringAttribute('class_list_glid');
  }
  public set classListGlid(value: string) {
    this._classListGlid = value;
  }
  public resetClassListGlid() {
    this._classListGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListGlidInput() {
    return this._classListGlid;
  }

  // class_list_name - computed: false, optional: false, required: true
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
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
}

export class DdosOutboundPolicyPolicyClassListListStructList extends cdktf.ComplexList {
  public internalValue? : DdosOutboundPolicyPolicyClassListListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosOutboundPolicyPolicyClassListListStructOutputReference {
    return new DdosOutboundPolicyPolicyClassListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosOutboundPolicyPolicyDefaultClassListStruct {
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#class_list_glid DdosOutboundPolicy#class_list_glid}
  */
  readonly classListGlid?: string;
  /**
  * Default class-list configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#configuration DdosOutboundPolicy#configuration}
  */
  readonly configuration?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#uuid DdosOutboundPolicy#uuid}
  */
  readonly uuid?: string;
}

export function ddosOutboundPolicyPolicyDefaultClassListStructToTerraform(struct?: DdosOutboundPolicyPolicyDefaultClassListStructOutputReference | DdosOutboundPolicyPolicyDefaultClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list_glid: cdktf.stringToTerraform(struct!.classListGlid),
    configuration: cdktf.numberToTerraform(struct!.configuration),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosOutboundPolicyPolicyDefaultClassListStructToHclTerraform(struct?: DdosOutboundPolicyPolicyDefaultClassListStructOutputReference | DdosOutboundPolicyPolicyDefaultClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list_glid: {
      value: cdktf.stringToHclTerraform(struct!.classListGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.numberToHclTerraform(struct!.configuration),
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

export class DdosOutboundPolicyPolicyDefaultClassListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosOutboundPolicyPolicyDefaultClassListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classListGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListGlid = this._classListGlid;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosOutboundPolicyPolicyDefaultClassListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classListGlid = undefined;
      this._configuration = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classListGlid = value.classListGlid;
      this._configuration = value.configuration;
      this._uuid = value.uuid;
    }
  }

  // class_list_glid - computed: false, optional: true, required: false
  private _classListGlid?: string; 
  public get classListGlid() {
    return this.getStringAttribute('class_list_glid');
  }
  public set classListGlid(value: string) {
    this._classListGlid = value;
  }
  public resetClassListGlid() {
    this._classListGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListGlidInput() {
    return this._classListGlid;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: number; 
  public get configuration() {
    return this.getNumberAttribute('configuration');
  }
  public set configuration(value: number) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy thunder_ddos_outbound_policy}
*/
export class DdosOutboundPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_outbound_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosOutboundPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosOutboundPolicy to import
  * @param importFromId The id of the existing DdosOutboundPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosOutboundPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_outbound_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy thunder_ddos_outbound_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosOutboundPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DdosOutboundPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_outbound_policy',
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
    this._asnBasedTracking.internalValue = config.asnBasedTracking;
    this._countryBasedTracking.internalValue = config.countryBasedTracking;
    this._policyClassListList.internalValue = config.policyClassListList;
    this._policyDefaultClassList.internalValue = config.policyDefaultClassList;
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

  // asn_based_tracking - computed: false, optional: true, required: false
  private _asnBasedTracking = new DdosOutboundPolicyAsnBasedTrackingOutputReference(this, "asn_based_tracking");
  public get asnBasedTracking() {
    return this._asnBasedTracking;
  }
  public putAsnBasedTracking(value: DdosOutboundPolicyAsnBasedTracking) {
    this._asnBasedTracking.internalValue = value;
  }
  public resetAsnBasedTracking() {
    this._asnBasedTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnBasedTrackingInput() {
    return this._asnBasedTracking.internalValue;
  }

  // country_based_tracking - computed: false, optional: true, required: false
  private _countryBasedTracking = new DdosOutboundPolicyCountryBasedTrackingOutputReference(this, "country_based_tracking");
  public get countryBasedTracking() {
    return this._countryBasedTracking;
  }
  public putCountryBasedTracking(value: DdosOutboundPolicyCountryBasedTracking) {
    this._countryBasedTracking.internalValue = value;
  }
  public resetCountryBasedTracking() {
    this._countryBasedTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryBasedTrackingInput() {
    return this._countryBasedTracking.internalValue;
  }

  // policy_class_list_list - computed: false, optional: true, required: false
  private _policyClassListList = new DdosOutboundPolicyPolicyClassListListStructList(this, "policy_class_list_list", false);
  public get policyClassListList() {
    return this._policyClassListList;
  }
  public putPolicyClassListList(value: DdosOutboundPolicyPolicyClassListListStruct[] | cdktf.IResolvable) {
    this._policyClassListList.internalValue = value;
  }
  public resetPolicyClassListList() {
    this._policyClassListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyClassListListInput() {
    return this._policyClassListList.internalValue;
  }

  // policy_default_class_list - computed: false, optional: true, required: false
  private _policyDefaultClassList = new DdosOutboundPolicyPolicyDefaultClassListStructOutputReference(this, "policy_default_class_list");
  public get policyDefaultClassList() {
    return this._policyDefaultClassList;
  }
  public putPolicyDefaultClassList(value: DdosOutboundPolicyPolicyDefaultClassListStruct) {
    this._policyDefaultClassList.internalValue = value;
  }
  public resetPolicyDefaultClassList() {
    this._policyDefaultClassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefaultClassListInput() {
    return this._policyDefaultClassList.internalValue;
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
      asn_based_tracking: ddosOutboundPolicyAsnBasedTrackingToTerraform(this._asnBasedTracking.internalValue),
      country_based_tracking: ddosOutboundPolicyCountryBasedTrackingToTerraform(this._countryBasedTracking.internalValue),
      policy_class_list_list: cdktf.listMapper(ddosOutboundPolicyPolicyClassListListStructToTerraform, true)(this._policyClassListList.internalValue),
      policy_default_class_list: ddosOutboundPolicyPolicyDefaultClassListStructToTerraform(this._policyDefaultClassList.internalValue),
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
      asn_based_tracking: {
        value: ddosOutboundPolicyAsnBasedTrackingToHclTerraform(this._asnBasedTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosOutboundPolicyAsnBasedTrackingList",
      },
      country_based_tracking: {
        value: ddosOutboundPolicyCountryBasedTrackingToHclTerraform(this._countryBasedTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosOutboundPolicyCountryBasedTrackingList",
      },
      policy_class_list_list: {
        value: cdktf.listMapperHcl(ddosOutboundPolicyPolicyClassListListStructToHclTerraform, true)(this._policyClassListList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosOutboundPolicyPolicyClassListListStructList",
      },
      policy_default_class_list: {
        value: ddosOutboundPolicyPolicyDefaultClassListStructToHclTerraform(this._policyDefaultClassList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosOutboundPolicyPolicyDefaultClassListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
