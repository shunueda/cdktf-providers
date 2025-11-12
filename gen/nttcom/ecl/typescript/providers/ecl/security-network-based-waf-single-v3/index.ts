// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNetworkBasedWafSingleV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#az_group SecurityNetworkBasedWafSingleV3#az_group}
  */
  readonly azGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#id SecurityNetworkBasedWafSingleV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#license_kind SecurityNetworkBasedWafSingleV3#license_kind}
  */
  readonly licenseKind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#locale SecurityNetworkBasedWafSingleV3#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#operating_mode SecurityNetworkBasedWafSingleV3#operating_mode}
  */
  readonly operatingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#tenant_id SecurityNetworkBasedWafSingleV3#tenant_id}
  */
  readonly tenantId: string;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#port SecurityNetworkBasedWafSingleV3#port}
  */
  readonly port?: SecurityNetworkBasedWafSingleV3Port;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#timeouts SecurityNetworkBasedWafSingleV3#timeouts}
  */
  readonly timeouts?: SecurityNetworkBasedWafSingleV3Timeouts;
}
export interface SecurityNetworkBasedWafSingleV3Port {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#comment SecurityNetworkBasedWafSingleV3#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#enable SecurityNetworkBasedWafSingleV3#enable}
  */
  readonly enable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#ip_address SecurityNetworkBasedWafSingleV3#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#ip_address_prefix SecurityNetworkBasedWafSingleV3#ip_address_prefix}
  */
  readonly ipAddressPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#mtu SecurityNetworkBasedWafSingleV3#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#network_id SecurityNetworkBasedWafSingleV3#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#subnet_id SecurityNetworkBasedWafSingleV3#subnet_id}
  */
  readonly subnetId?: string;
}

export function securityNetworkBasedWafSingleV3PortToTerraform(struct?: SecurityNetworkBasedWafSingleV3PortOutputReference | SecurityNetworkBasedWafSingleV3Port): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    enable: cdktf.stringToTerraform(struct!.enable),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_prefix: cdktf.numberToTerraform(struct!.ipAddressPrefix),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function securityNetworkBasedWafSingleV3PortToHclTerraform(struct?: SecurityNetworkBasedWafSingleV3PortOutputReference | SecurityNetworkBasedWafSingleV3Port): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_prefix: {
      value: cdktf.numberToHclTerraform(struct!.ipAddressPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: cdktf.stringToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNetworkBasedWafSingleV3PortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityNetworkBasedWafSingleV3Port | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressPrefix = this._ipAddressPrefix;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNetworkBasedWafSingleV3Port | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._enable = undefined;
      this._ipAddress = undefined;
      this._ipAddressPrefix = undefined;
      this._mtu = undefined;
      this._networkId = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._enable = value.enable;
      this._ipAddress = value.ipAddress;
      this._ipAddressPrefix = value.ipAddressPrefix;
      this._mtu = value.mtu;
      this._networkId = value.networkId;
      this._subnetId = value.subnetId;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_prefix - computed: false, optional: true, required: false
  private _ipAddressPrefix?: number; 
  public get ipAddressPrefix() {
    return this.getNumberAttribute('ip_address_prefix');
  }
  public set ipAddressPrefix(value: number) {
    this._ipAddressPrefix = value;
  }
  public resetIpAddressPrefix() {
    this._ipAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPrefixInput() {
    return this._ipAddressPrefix;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface SecurityNetworkBasedWafSingleV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#create SecurityNetworkBasedWafSingleV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#delete SecurityNetworkBasedWafSingleV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#update SecurityNetworkBasedWafSingleV3#update}
  */
  readonly update?: string;
}

export function securityNetworkBasedWafSingleV3TimeoutsToTerraform(struct?: SecurityNetworkBasedWafSingleV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function securityNetworkBasedWafSingleV3TimeoutsToHclTerraform(struct?: SecurityNetworkBasedWafSingleV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNetworkBasedWafSingleV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNetworkBasedWafSingleV3Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNetworkBasedWafSingleV3Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3 ecl_security_network_based_waf_single_v3}
*/
export class SecurityNetworkBasedWafSingleV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_security_network_based_waf_single_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNetworkBasedWafSingleV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNetworkBasedWafSingleV3 to import
  * @param importFromId The id of the existing SecurityNetworkBasedWafSingleV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNetworkBasedWafSingleV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_security_network_based_waf_single_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_waf_single_v3 ecl_security_network_based_waf_single_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNetworkBasedWafSingleV3Config
  */
  public constructor(scope: Construct, id: string, config: SecurityNetworkBasedWafSingleV3Config) {
    super(scope, id, {
      terraformResourceType: 'ecl_security_network_based_waf_single_v3',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1',
        providerVersionConstraint: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azGroup = config.azGroup;
    this._id = config.id;
    this._licenseKind = config.licenseKind;
    this._locale = config.locale;
    this._operatingMode = config.operatingMode;
    this._tenantId = config.tenantId;
    this._port.internalValue = config.port;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // az_group - computed: false, optional: false, required: true
  private _azGroup?: string; 
  public get azGroup() {
    return this.getStringAttribute('az_group');
  }
  public set azGroup(value: string) {
    this._azGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azGroupInput() {
    return this._azGroup;
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

  // license_kind - computed: false, optional: false, required: true
  private _licenseKind?: string; 
  public get licenseKind() {
    return this.getStringAttribute('license_kind');
  }
  public set licenseKind(value: string) {
    this._licenseKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKindInput() {
    return this._licenseKind;
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // operating_mode - computed: false, optional: true, required: false
  private _operatingMode?: string; 
  public get operatingMode() {
    return this.getStringAttribute('operating_mode');
  }
  public set operatingMode(value: string) {
    this._operatingMode = value;
  }
  public resetOperatingMode() {
    this._operatingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingModeInput() {
    return this._operatingMode;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // port - computed: false, optional: true, required: false
  private _port = new SecurityNetworkBasedWafSingleV3PortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: SecurityNetworkBasedWafSingleV3Port) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecurityNetworkBasedWafSingleV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecurityNetworkBasedWafSingleV3Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      az_group: cdktf.stringToTerraform(this._azGroup),
      id: cdktf.stringToTerraform(this._id),
      license_kind: cdktf.stringToTerraform(this._licenseKind),
      locale: cdktf.stringToTerraform(this._locale),
      operating_mode: cdktf.stringToTerraform(this._operatingMode),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      port: securityNetworkBasedWafSingleV3PortToTerraform(this._port.internalValue),
      timeouts: securityNetworkBasedWafSingleV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      az_group: {
        value: cdktf.stringToHclTerraform(this._azGroup),
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
      license_kind: {
        value: cdktf.stringToHclTerraform(this._licenseKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_mode: {
        value: cdktf.stringToHclTerraform(this._operatingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: securityNetworkBasedWafSingleV3PortToHclTerraform(this._port.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityNetworkBasedWafSingleV3PortList",
      },
      timeouts: {
        value: securityNetworkBasedWafSingleV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityNetworkBasedWafSingleV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
