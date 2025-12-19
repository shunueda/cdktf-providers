// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetBfdAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Demand mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#demand InterfaceEthernetBfdA#demand}
  */
  readonly demand?: number;
  /**
  * Enable BFD Echo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#echo InterfaceEthernetBfdA#echo}
  */
  readonly echo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#id InterfaceEthernetBfdA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#ifnum InterfaceEthernetBfdA#ifnum}
  */
  readonly ifnum: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#uuid InterfaceEthernetBfdA#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#authentication InterfaceEthernetBfdA#authentication}
  */
  readonly authentication?: InterfaceEthernetBfdAuthenticationA;
  /**
  * interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#interval_cfg InterfaceEthernetBfdA#interval_cfg}
  */
  readonly intervalCfg?: InterfaceEthernetBfdIntervalCfgA;
}
export interface InterfaceEthernetBfdAuthenticationA {
  /**
  * Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#key_id InterfaceEthernetBfdA#key_id}
  */
  readonly keyId?: number;
  /**
  * 'md5': Keyed MD5; 'meticulous-md5': Meticulous Keyed MD5; 'meticulous-sha1': Meticulous Keyed SHA1; 'sha1': Keyed SHA1; 'simple': Simple Password;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#method InterfaceEthernetBfdA#method}
  */
  readonly method?: string;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#password InterfaceEthernetBfdA#password}
  */
  readonly password?: string;
}

export function interfaceEthernetBfdAuthenticationAToTerraform(struct?: InterfaceEthernetBfdAuthenticationAOutputReference | InterfaceEthernetBfdAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.numberToTerraform(struct!.keyId),
    method: cdktf.stringToTerraform(struct!.method),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function interfaceEthernetBfdAuthenticationAToHclTerraform(struct?: InterfaceEthernetBfdAuthenticationAOutputReference | InterfaceEthernetBfdAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetBfdAuthenticationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetBfdAuthenticationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetBfdAuthenticationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._method = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._method = value.method;
      this._password = value.password;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface InterfaceEthernetBfdIntervalCfgA {
  /**
  * Transmit interval between BFD packets (Milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#interval InterfaceEthernetBfdA#interval}
  */
  readonly interval?: number;
  /**
  * Minimum receive interval capability (Milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#min_rx InterfaceEthernetBfdA#min_rx}
  */
  readonly minRx?: number;
  /**
  * Multiplier value used to compute holddown (value used to multiply the interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#multiplier InterfaceEthernetBfdA#multiplier}
  */
  readonly multiplier?: number;
}

export function interfaceEthernetBfdIntervalCfgAToTerraform(struct?: InterfaceEthernetBfdIntervalCfgAOutputReference | InterfaceEthernetBfdIntervalCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    min_rx: cdktf.numberToTerraform(struct!.minRx),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
  }
}


export function interfaceEthernetBfdIntervalCfgAToHclTerraform(struct?: InterfaceEthernetBfdIntervalCfgAOutputReference | InterfaceEthernetBfdIntervalCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rx: {
      value: cdktf.numberToHclTerraform(struct!.minRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetBfdIntervalCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetBfdIntervalCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._minRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRx = this._minRx;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetBfdIntervalCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._minRx = undefined;
      this._multiplier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._minRx = value.minRx;
      this._multiplier = value.multiplier;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // min_rx - computed: false, optional: true, required: false
  private _minRx?: number; 
  public get minRx() {
    return this.getNumberAttribute('min_rx');
  }
  public set minRx(value: number) {
    this._minRx = value;
  }
  public resetMinRx() {
    this._minRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRxInput() {
    return this._minRx;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd thunder_interface_ethernet_bfd}
*/
export class InterfaceEthernetBfdA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ethernet_bfd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetBfdA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetBfdA to import
  * @param importFromId The id of the existing InterfaceEthernetBfdA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetBfdA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ethernet_bfd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_bfd thunder_interface_ethernet_bfd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetBfdAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetBfdAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ethernet_bfd',
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
    this._demand = config.demand;
    this._echo = config.echo;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._uuid = config.uuid;
    this._authentication.internalValue = config.authentication;
    this._intervalCfg.internalValue = config.intervalCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // demand - computed: false, optional: true, required: false
  private _demand?: number; 
  public get demand() {
    return this.getNumberAttribute('demand');
  }
  public set demand(value: number) {
    this._demand = value;
  }
  public resetDemand() {
    this._demand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demandInput() {
    return this._demand;
  }

  // echo - computed: false, optional: true, required: false
  private _echo?: number; 
  public get echo() {
    return this.getNumberAttribute('echo');
  }
  public set echo(value: number) {
    this._echo = value;
  }
  public resetEcho() {
    this._echo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoInput() {
    return this._echo;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new InterfaceEthernetBfdAuthenticationAOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceEthernetBfdAuthenticationA) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // interval_cfg - computed: false, optional: true, required: false
  private _intervalCfg = new InterfaceEthernetBfdIntervalCfgAOutputReference(this, "interval_cfg");
  public get intervalCfg() {
    return this._intervalCfg;
  }
  public putIntervalCfg(value: InterfaceEthernetBfdIntervalCfgA) {
    this._intervalCfg.internalValue = value;
  }
  public resetIntervalCfg() {
    this._intervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalCfgInput() {
    return this._intervalCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      demand: cdktf.numberToTerraform(this._demand),
      echo: cdktf.numberToTerraform(this._echo),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      uuid: cdktf.stringToTerraform(this._uuid),
      authentication: interfaceEthernetBfdAuthenticationAToTerraform(this._authentication.internalValue),
      interval_cfg: interfaceEthernetBfdIntervalCfgAToTerraform(this._intervalCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      demand: {
        value: cdktf.numberToHclTerraform(this._demand),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      echo: {
        value: cdktf.numberToHclTerraform(this._echo),
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
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
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
      authentication: {
        value: interfaceEthernetBfdAuthenticationAToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetBfdAuthenticationAList",
      },
      interval_cfg: {
        value: interfaceEthernetBfdIntervalCfgAToHclTerraform(this._intervalCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetBfdIntervalCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
