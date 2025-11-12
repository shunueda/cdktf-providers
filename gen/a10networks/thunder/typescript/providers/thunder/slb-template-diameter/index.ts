// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDiameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * avp code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#avp_code SlbTemplateDiameter#avp_code}
  */
  readonly avpCode?: number;
  /**
  * pattern to be matched in the avp string name, max length 127 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#avp_string SlbTemplateDiameter#avp_string}
  */
  readonly avpString?: string;
  /**
  * customizing cea response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#customize_cea SlbTemplateDiameter#customize_cea}
  */
  readonly customizeCea?: number;
  /**
  * dwr health-check timer interval (in 100 milli second unit, default is 100, 0 means unset this option)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#dwr_time SlbTemplateDiameter#dwr_time}
  */
  readonly dwrTime?: number;
  /**
  * number of successful dwr health-check before declaring target up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#dwr_up_retry SlbTemplateDiameter#dwr_up_retry}
  */
  readonly dwrUpRetry?: number;
  /**
  * Forward client message to the latest server that sends message with the same session id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#forward_to_latest_server SlbTemplateDiameter#forward_to_latest_server}
  */
  readonly forwardToLatestServer?: number;
  /**
  * Forward server message even it has unknown session id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#forward_unknown_session_id SlbTemplateDiameter#forward_unknown_session_id}
  */
  readonly forwardUnknownSessionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#id SlbTemplateDiameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * user sesison idle timeout (in minutes, default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#idle_timeout SlbTemplateDiameter#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Load balance based on the session id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#load_balance_on_session_id SlbTemplateDiameter#load_balance_on_session_id}
  */
  readonly loadBalanceOnSessionId?: number;
  /**
  * allowing multiple origin-host to a single server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#multiple_origin_host SlbTemplateDiameter#multiple_origin_host}
  */
  readonly multipleOriginHost?: number;
  /**
  * diameter template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#name SlbTemplateDiameter#name}
  */
  readonly name: string;
  /**
  * origin-realm name avp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#origin_realm SlbTemplateDiameter#origin_realm}
  */
  readonly originRealm?: string;
  /**
  * product name avp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#product_name SlbTemplateDiameter#product_name}
  */
  readonly productName?: string;
  /**
  * Relaxed Origin-Host Format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#relaxed_origin_host SlbTemplateDiameter#relaxed_origin_host}
  */
  readonly relaxedOriginHost?: number;
  /**
  * service group name, this is the service group that the message needs to be copied to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#service_group_name SlbTemplateDiameter#service_group_name}
  */
  readonly serviceGroupName?: string;
  /**
  * user session age allowed (default 10), this is not idle-time (in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#session_age SlbTemplateDiameter#session_age}
  */
  readonly sessionAge?: number;
  /**
  * remove diameter session when receiving CCA-T message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#terminate_on_cca_t SlbTemplateDiameter#terminate_on_cca_t}
  */
  readonly terminateOnCcaT?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#user_tag SlbTemplateDiameter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#uuid SlbTemplateDiameter#uuid}
  */
  readonly uuid?: string;
  /**
  * vendor-id avp (Vendor Id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#vendor_id SlbTemplateDiameter#vendor_id}
  */
  readonly vendorId?: number;
  /**
  * avp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#avp_list SlbTemplateDiameter#avp_list}
  */
  readonly avpList?: SlbTemplateDiameterAvpListStruct[] | cdktf.IResolvable;
  /**
  * message_code_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#message_code_list SlbTemplateDiameter#message_code_list}
  */
  readonly messageCodeList?: SlbTemplateDiameterMessageCodeListStruct[] | cdktf.IResolvable;
  /**
  * origin_host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#origin_host SlbTemplateDiameter#origin_host}
  */
  readonly originHost?: SlbTemplateDiameterOriginHost;
}
export interface SlbTemplateDiameterAvpListStruct {
  /**
  * customize avps for cer to the server (avp number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#avp SlbTemplateDiameter#avp}
  */
  readonly avp?: number;
  /**
  * 32 bits integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#int32 SlbTemplateDiameter#int32}
  */
  readonly int32?: number;
  /**
  * 64 bits integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#int64 SlbTemplateDiameter#int64}
  */
  readonly int64?: number;
  /**
  * mandatory avp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#mandatory SlbTemplateDiameter#mandatory}
  */
  readonly mandatory?: number;
  /**
  * String (string name, max length 127 bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#string SlbTemplateDiameter#string}
  */
  readonly string?: string;
}

export function slbTemplateDiameterAvpListStructToTerraform(struct?: SlbTemplateDiameterAvpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avp: cdktf.numberToTerraform(struct!.avp),
    int32: cdktf.numberToTerraform(struct!.int32),
    int64: cdktf.numberToTerraform(struct!.int64),
    mandatory: cdktf.numberToTerraform(struct!.mandatory),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function slbTemplateDiameterAvpListStructToHclTerraform(struct?: SlbTemplateDiameterAvpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avp: {
      value: cdktf.numberToHclTerraform(struct!.avp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    int32: {
      value: cdktf.numberToHclTerraform(struct!.int32),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    int64: {
      value: cdktf.numberToHclTerraform(struct!.int64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mandatory: {
      value: cdktf.numberToHclTerraform(struct!.mandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDiameterAvpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDiameterAvpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avp !== undefined) {
      hasAnyValues = true;
      internalValueResult.avp = this._avp;
    }
    if (this._int32 !== undefined) {
      hasAnyValues = true;
      internalValueResult.int32 = this._int32;
    }
    if (this._int64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64 = this._int64;
    }
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDiameterAvpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avp = undefined;
      this._int32 = undefined;
      this._int64 = undefined;
      this._mandatory = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avp = value.avp;
      this._int32 = value.int32;
      this._int64 = value.int64;
      this._mandatory = value.mandatory;
      this._string = value.string;
    }
  }

  // avp - computed: false, optional: true, required: false
  private _avp?: number; 
  public get avp() {
    return this.getNumberAttribute('avp');
  }
  public set avp(value: number) {
    this._avp = value;
  }
  public resetAvp() {
    this._avp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avpInput() {
    return this._avp;
  }

  // int32 - computed: false, optional: true, required: false
  private _int32?: number; 
  public get int32() {
    return this.getNumberAttribute('int32');
  }
  public set int32(value: number) {
    this._int32 = value;
  }
  public resetInt32() {
    this._int32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int32Input() {
    return this._int32;
  }

  // int64 - computed: false, optional: true, required: false
  private _int64?: number; 
  public get int64() {
    return this.getNumberAttribute('int64');
  }
  public set int64(value: number) {
    this._int64 = value;
  }
  public resetInt64() {
    this._int64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64Input() {
    return this._int64;
  }

  // mandatory - computed: false, optional: true, required: false
  private _mandatory?: number; 
  public get mandatory() {
    return this.getNumberAttribute('mandatory');
  }
  public set mandatory(value: number) {
    this._mandatory = value;
  }
  public resetMandatory() {
    this._mandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class SlbTemplateDiameterAvpListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDiameterAvpListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDiameterAvpListStructOutputReference {
    return new SlbTemplateDiameterAvpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDiameterMessageCodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#message_code SlbTemplateDiameter#message_code}
  */
  readonly messageCode?: number;
}

export function slbTemplateDiameterMessageCodeListStructToTerraform(struct?: SlbTemplateDiameterMessageCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_code: cdktf.numberToTerraform(struct!.messageCode),
  }
}


export function slbTemplateDiameterMessageCodeListStructToHclTerraform(struct?: SlbTemplateDiameterMessageCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_code: {
      value: cdktf.numberToHclTerraform(struct!.messageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDiameterMessageCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDiameterMessageCodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCode = this._messageCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDiameterMessageCodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageCode = value.messageCode;
    }
  }

  // message_code - computed: false, optional: true, required: false
  private _messageCode?: number; 
  public get messageCode() {
    return this.getNumberAttribute('message_code');
  }
  public set messageCode(value: number) {
    this._messageCode = value;
  }
  public resetMessageCode() {
    this._messageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCodeInput() {
    return this._messageCode;
  }
}

export class SlbTemplateDiameterMessageCodeListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDiameterMessageCodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDiameterMessageCodeListStructOutputReference {
    return new SlbTemplateDiameterMessageCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDiameterOriginHost {
  /**
  * origin-host name avp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#origin_host_name SlbTemplateDiameter#origin_host_name}
  */
  readonly originHostName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#uuid SlbTemplateDiameter#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateDiameterOriginHostToTerraform(struct?: SlbTemplateDiameterOriginHostOutputReference | SlbTemplateDiameterOriginHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_host_name: cdktf.stringToTerraform(struct!.originHostName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateDiameterOriginHostToHclTerraform(struct?: SlbTemplateDiameterOriginHostOutputReference | SlbTemplateDiameterOriginHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_host_name: {
      value: cdktf.stringToHclTerraform(struct!.originHostName),
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

export class SlbTemplateDiameterOriginHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDiameterOriginHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originHostName = this._originHostName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDiameterOriginHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._originHostName = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._originHostName = value.originHostName;
      this._uuid = value.uuid;
    }
  }

  // origin_host_name - computed: false, optional: true, required: false
  private _originHostName?: string; 
  public get originHostName() {
    return this.getStringAttribute('origin_host_name');
  }
  public set originHostName(value: string) {
    this._originHostName = value;
  }
  public resetOriginHostName() {
    this._originHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originHostNameInput() {
    return this._originHostName;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter thunder_slb_template_diameter}
*/
export class SlbTemplateDiameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_diameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDiameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDiameter to import
  * @param importFromId The id of the existing SlbTemplateDiameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDiameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_diameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_diameter thunder_slb_template_diameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDiameterConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDiameterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_diameter',
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
    this._avpCode = config.avpCode;
    this._avpString = config.avpString;
    this._customizeCea = config.customizeCea;
    this._dwrTime = config.dwrTime;
    this._dwrUpRetry = config.dwrUpRetry;
    this._forwardToLatestServer = config.forwardToLatestServer;
    this._forwardUnknownSessionId = config.forwardUnknownSessionId;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._loadBalanceOnSessionId = config.loadBalanceOnSessionId;
    this._multipleOriginHost = config.multipleOriginHost;
    this._name = config.name;
    this._originRealm = config.originRealm;
    this._productName = config.productName;
    this._relaxedOriginHost = config.relaxedOriginHost;
    this._serviceGroupName = config.serviceGroupName;
    this._sessionAge = config.sessionAge;
    this._terminateOnCcaT = config.terminateOnCcaT;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vendorId = config.vendorId;
    this._avpList.internalValue = config.avpList;
    this._messageCodeList.internalValue = config.messageCodeList;
    this._originHost.internalValue = config.originHost;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avp_code - computed: false, optional: true, required: false
  private _avpCode?: number; 
  public get avpCode() {
    return this.getNumberAttribute('avp_code');
  }
  public set avpCode(value: number) {
    this._avpCode = value;
  }
  public resetAvpCode() {
    this._avpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avpCodeInput() {
    return this._avpCode;
  }

  // avp_string - computed: false, optional: true, required: false
  private _avpString?: string; 
  public get avpString() {
    return this.getStringAttribute('avp_string');
  }
  public set avpString(value: string) {
    this._avpString = value;
  }
  public resetAvpString() {
    this._avpString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avpStringInput() {
    return this._avpString;
  }

  // customize_cea - computed: false, optional: true, required: false
  private _customizeCea?: number; 
  public get customizeCea() {
    return this.getNumberAttribute('customize_cea');
  }
  public set customizeCea(value: number) {
    this._customizeCea = value;
  }
  public resetCustomizeCea() {
    this._customizeCea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizeCeaInput() {
    return this._customizeCea;
  }

  // dwr_time - computed: false, optional: true, required: false
  private _dwrTime?: number; 
  public get dwrTime() {
    return this.getNumberAttribute('dwr_time');
  }
  public set dwrTime(value: number) {
    this._dwrTime = value;
  }
  public resetDwrTime() {
    this._dwrTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwrTimeInput() {
    return this._dwrTime;
  }

  // dwr_up_retry - computed: false, optional: true, required: false
  private _dwrUpRetry?: number; 
  public get dwrUpRetry() {
    return this.getNumberAttribute('dwr_up_retry');
  }
  public set dwrUpRetry(value: number) {
    this._dwrUpRetry = value;
  }
  public resetDwrUpRetry() {
    this._dwrUpRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwrUpRetryInput() {
    return this._dwrUpRetry;
  }

  // forward_to_latest_server - computed: false, optional: true, required: false
  private _forwardToLatestServer?: number; 
  public get forwardToLatestServer() {
    return this.getNumberAttribute('forward_to_latest_server');
  }
  public set forwardToLatestServer(value: number) {
    this._forwardToLatestServer = value;
  }
  public resetForwardToLatestServer() {
    this._forwardToLatestServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToLatestServerInput() {
    return this._forwardToLatestServer;
  }

  // forward_unknown_session_id - computed: false, optional: true, required: false
  private _forwardUnknownSessionId?: number; 
  public get forwardUnknownSessionId() {
    return this.getNumberAttribute('forward_unknown_session_id');
  }
  public set forwardUnknownSessionId(value: number) {
    this._forwardUnknownSessionId = value;
  }
  public resetForwardUnknownSessionId() {
    this._forwardUnknownSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUnknownSessionIdInput() {
    return this._forwardUnknownSessionId;
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

  // load_balance_on_session_id - computed: false, optional: true, required: false
  private _loadBalanceOnSessionId?: number; 
  public get loadBalanceOnSessionId() {
    return this.getNumberAttribute('load_balance_on_session_id');
  }
  public set loadBalanceOnSessionId(value: number) {
    this._loadBalanceOnSessionId = value;
  }
  public resetLoadBalanceOnSessionId() {
    this._loadBalanceOnSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceOnSessionIdInput() {
    return this._loadBalanceOnSessionId;
  }

  // multiple_origin_host - computed: false, optional: true, required: false
  private _multipleOriginHost?: number; 
  public get multipleOriginHost() {
    return this.getNumberAttribute('multiple_origin_host');
  }
  public set multipleOriginHost(value: number) {
    this._multipleOriginHost = value;
  }
  public resetMultipleOriginHost() {
    this._multipleOriginHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleOriginHostInput() {
    return this._multipleOriginHost;
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

  // origin_realm - computed: false, optional: true, required: false
  private _originRealm?: string; 
  public get originRealm() {
    return this.getStringAttribute('origin_realm');
  }
  public set originRealm(value: string) {
    this._originRealm = value;
  }
  public resetOriginRealm() {
    this._originRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRealmInput() {
    return this._originRealm;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // relaxed_origin_host - computed: false, optional: true, required: false
  private _relaxedOriginHost?: number; 
  public get relaxedOriginHost() {
    return this.getNumberAttribute('relaxed_origin_host');
  }
  public set relaxedOriginHost(value: number) {
    this._relaxedOriginHost = value;
  }
  public resetRelaxedOriginHost() {
    this._relaxedOriginHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaxedOriginHostInput() {
    return this._relaxedOriginHost;
  }

  // service_group_name - computed: false, optional: true, required: false
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  public resetServiceGroupName() {
    this._serviceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
  }

  // session_age - computed: false, optional: true, required: false
  private _sessionAge?: number; 
  public get sessionAge() {
    return this.getNumberAttribute('session_age');
  }
  public set sessionAge(value: number) {
    this._sessionAge = value;
  }
  public resetSessionAge() {
    this._sessionAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAgeInput() {
    return this._sessionAge;
  }

  // terminate_on_cca_t - computed: false, optional: true, required: false
  private _terminateOnCcaT?: number; 
  public get terminateOnCcaT() {
    return this.getNumberAttribute('terminate_on_cca_t');
  }
  public set terminateOnCcaT(value: number) {
    this._terminateOnCcaT = value;
  }
  public resetTerminateOnCcaT() {
    this._terminateOnCcaT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateOnCcaTInput() {
    return this._terminateOnCcaT;
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

  // vendor_id - computed: false, optional: true, required: false
  private _vendorId?: number; 
  public get vendorId() {
    return this.getNumberAttribute('vendor_id');
  }
  public set vendorId(value: number) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }

  // avp_list - computed: false, optional: true, required: false
  private _avpList = new SlbTemplateDiameterAvpListStructList(this, "avp_list", false);
  public get avpList() {
    return this._avpList;
  }
  public putAvpList(value: SlbTemplateDiameterAvpListStruct[] | cdktf.IResolvable) {
    this._avpList.internalValue = value;
  }
  public resetAvpList() {
    this._avpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avpListInput() {
    return this._avpList.internalValue;
  }

  // message_code_list - computed: false, optional: true, required: false
  private _messageCodeList = new SlbTemplateDiameterMessageCodeListStructList(this, "message_code_list", false);
  public get messageCodeList() {
    return this._messageCodeList;
  }
  public putMessageCodeList(value: SlbTemplateDiameterMessageCodeListStruct[] | cdktf.IResolvable) {
    this._messageCodeList.internalValue = value;
  }
  public resetMessageCodeList() {
    this._messageCodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCodeListInput() {
    return this._messageCodeList.internalValue;
  }

  // origin_host - computed: false, optional: true, required: false
  private _originHost = new SlbTemplateDiameterOriginHostOutputReference(this, "origin_host");
  public get originHost() {
    return this._originHost;
  }
  public putOriginHost(value: SlbTemplateDiameterOriginHost) {
    this._originHost.internalValue = value;
  }
  public resetOriginHost() {
    this._originHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originHostInput() {
    return this._originHost.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      avp_code: cdktf.numberToTerraform(this._avpCode),
      avp_string: cdktf.stringToTerraform(this._avpString),
      customize_cea: cdktf.numberToTerraform(this._customizeCea),
      dwr_time: cdktf.numberToTerraform(this._dwrTime),
      dwr_up_retry: cdktf.numberToTerraform(this._dwrUpRetry),
      forward_to_latest_server: cdktf.numberToTerraform(this._forwardToLatestServer),
      forward_unknown_session_id: cdktf.numberToTerraform(this._forwardUnknownSessionId),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      load_balance_on_session_id: cdktf.numberToTerraform(this._loadBalanceOnSessionId),
      multiple_origin_host: cdktf.numberToTerraform(this._multipleOriginHost),
      name: cdktf.stringToTerraform(this._name),
      origin_realm: cdktf.stringToTerraform(this._originRealm),
      product_name: cdktf.stringToTerraform(this._productName),
      relaxed_origin_host: cdktf.numberToTerraform(this._relaxedOriginHost),
      service_group_name: cdktf.stringToTerraform(this._serviceGroupName),
      session_age: cdktf.numberToTerraform(this._sessionAge),
      terminate_on_cca_t: cdktf.numberToTerraform(this._terminateOnCcaT),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vendor_id: cdktf.numberToTerraform(this._vendorId),
      avp_list: cdktf.listMapper(slbTemplateDiameterAvpListStructToTerraform, true)(this._avpList.internalValue),
      message_code_list: cdktf.listMapper(slbTemplateDiameterMessageCodeListStructToTerraform, true)(this._messageCodeList.internalValue),
      origin_host: slbTemplateDiameterOriginHostToTerraform(this._originHost.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avp_code: {
        value: cdktf.numberToHclTerraform(this._avpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      avp_string: {
        value: cdktf.stringToHclTerraform(this._avpString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customize_cea: {
        value: cdktf.numberToHclTerraform(this._customizeCea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dwr_time: {
        value: cdktf.numberToHclTerraform(this._dwrTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dwr_up_retry: {
        value: cdktf.numberToHclTerraform(this._dwrUpRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_to_latest_server: {
        value: cdktf.numberToHclTerraform(this._forwardToLatestServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_unknown_session_id: {
        value: cdktf.numberToHclTerraform(this._forwardUnknownSessionId),
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
      load_balance_on_session_id: {
        value: cdktf.numberToHclTerraform(this._loadBalanceOnSessionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multiple_origin_host: {
        value: cdktf.numberToHclTerraform(this._multipleOriginHost),
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
      origin_realm: {
        value: cdktf.stringToHclTerraform(this._originRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relaxed_origin_host: {
        value: cdktf.numberToHclTerraform(this._relaxedOriginHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group_name: {
        value: cdktf.stringToHclTerraform(this._serviceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_age: {
        value: cdktf.numberToHclTerraform(this._sessionAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      terminate_on_cca_t: {
        value: cdktf.numberToHclTerraform(this._terminateOnCcaT),
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
      vendor_id: {
        value: cdktf.numberToHclTerraform(this._vendorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      avp_list: {
        value: cdktf.listMapperHcl(slbTemplateDiameterAvpListStructToHclTerraform, true)(this._avpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDiameterAvpListStructList",
      },
      message_code_list: {
        value: cdktf.listMapperHcl(slbTemplateDiameterMessageCodeListStructToHclTerraform, true)(this._messageCodeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDiameterMessageCodeListStructList",
      },
      origin_host: {
        value: slbTemplateDiameterOriginHostToHclTerraform(this._originHost.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDiameterOriginHostList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
