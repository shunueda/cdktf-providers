// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalLoadBalanceSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#aging_period GlobalLoadBalanceSetting#aging_period}
  */
  readonly agingPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#auth_type GlobalLoadBalanceSetting#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#ca_verify GlobalLoadBalanceSetting#ca_verify}
  */
  readonly caVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#cert GlobalLoadBalanceSetting#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#id GlobalLoadBalanceSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#ipv4_accessed_status GlobalLoadBalanceSetting#ipv4_accessed_status}
  */
  readonly ipv4AccessedStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#ipv6_accessed_status GlobalLoadBalanceSetting#ipv6_accessed_status}
  */
  readonly ipv6AccessedStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#listen_on_interface_all GlobalLoadBalanceSetting#listen_on_interface_all}
  */
  readonly listenOnInterfaceAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#listen_on_interface_list GlobalLoadBalanceSetting#listen_on_interface_list}
  */
  readonly listenOnInterfaceList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#mask_length GlobalLoadBalanceSetting#mask_length}
  */
  readonly maskLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#mask_length6 GlobalLoadBalanceSetting#mask_length6}
  */
  readonly maskLength6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#password GlobalLoadBalanceSetting#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#persist_aging_period GlobalLoadBalanceSetting#persist_aging_period}
  */
  readonly persistAgingPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#persist_mask_length GlobalLoadBalanceSetting#persist_mask_length}
  */
  readonly persistMaskLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#persist_mask_length6 GlobalLoadBalanceSetting#persist_mask_length6}
  */
  readonly persistMaskLength6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#port GlobalLoadBalanceSetting#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#proto GlobalLoadBalanceSetting#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#retry_interval GlobalLoadBalanceSetting#retry_interval}
  */
  readonly retryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#retry_num GlobalLoadBalanceSetting#retry_num}
  */
  readonly retryNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#trust_ca_group GlobalLoadBalanceSetting#trust_ca_group}
  */
  readonly trustCaGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#trust_inter_ca_group GlobalLoadBalanceSetting#trust_inter_ca_group}
  */
  readonly trustInterCaGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#user_defined_cert GlobalLoadBalanceSetting#user_defined_cert}
  */
  readonly userDefinedCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#vdom GlobalLoadBalanceSetting#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting fortiadc_global_load_balance_setting}
*/
export class GlobalLoadBalanceSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_global_load_balance_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalLoadBalanceSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalLoadBalanceSetting to import
  * @param importFromId The id of the existing GlobalLoadBalanceSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalLoadBalanceSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_global_load_balance_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_setting fortiadc_global_load_balance_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalLoadBalanceSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GlobalLoadBalanceSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_global_load_balance_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agingPeriod = config.agingPeriod;
    this._authType = config.authType;
    this._caVerify = config.caVerify;
    this._cert = config.cert;
    this._id = config.id;
    this._ipv4AccessedStatus = config.ipv4AccessedStatus;
    this._ipv6AccessedStatus = config.ipv6AccessedStatus;
    this._listenOnInterfaceAll = config.listenOnInterfaceAll;
    this._listenOnInterfaceList = config.listenOnInterfaceList;
    this._maskLength = config.maskLength;
    this._maskLength6 = config.maskLength6;
    this._password = config.password;
    this._persistAgingPeriod = config.persistAgingPeriod;
    this._persistMaskLength = config.persistMaskLength;
    this._persistMaskLength6 = config.persistMaskLength6;
    this._port = config.port;
    this._proto = config.proto;
    this._retryInterval = config.retryInterval;
    this._retryNum = config.retryNum;
    this._trustCaGroup = config.trustCaGroup;
    this._trustInterCaGroup = config.trustInterCaGroup;
    this._userDefinedCert = config.userDefinedCert;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aging_period - computed: true, optional: true, required: false
  private _agingPeriod?: string; 
  public get agingPeriod() {
    return this.getStringAttribute('aging_period');
  }
  public set agingPeriod(value: string) {
    this._agingPeriod = value;
  }
  public resetAgingPeriod() {
    this._agingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingPeriodInput() {
    return this._agingPeriod;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // ca_verify - computed: true, optional: true, required: false
  private _caVerify?: string; 
  public get caVerify() {
    return this.getStringAttribute('ca_verify');
  }
  public set caVerify(value: string) {
    this._caVerify = value;
  }
  public resetCaVerify() {
    this._caVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caVerifyInput() {
    return this._caVerify;
  }

  // cert - computed: true, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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

  // ipv4_accessed_status - computed: true, optional: true, required: false
  private _ipv4AccessedStatus?: string; 
  public get ipv4AccessedStatus() {
    return this.getStringAttribute('ipv4_accessed_status');
  }
  public set ipv4AccessedStatus(value: string) {
    this._ipv4AccessedStatus = value;
  }
  public resetIpv4AccessedStatus() {
    this._ipv4AccessedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessedStatusInput() {
    return this._ipv4AccessedStatus;
  }

  // ipv6_accessed_status - computed: true, optional: true, required: false
  private _ipv6AccessedStatus?: string; 
  public get ipv6AccessedStatus() {
    return this.getStringAttribute('ipv6_accessed_status');
  }
  public set ipv6AccessedStatus(value: string) {
    this._ipv6AccessedStatus = value;
  }
  public resetIpv6AccessedStatus() {
    this._ipv6AccessedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessedStatusInput() {
    return this._ipv6AccessedStatus;
  }

  // listen_on_interface_all - computed: true, optional: true, required: false
  private _listenOnInterfaceAll?: string; 
  public get listenOnInterfaceAll() {
    return this.getStringAttribute('listen_on_interface_all');
  }
  public set listenOnInterfaceAll(value: string) {
    this._listenOnInterfaceAll = value;
  }
  public resetListenOnInterfaceAll() {
    this._listenOnInterfaceAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnInterfaceAllInput() {
    return this._listenOnInterfaceAll;
  }

  // listen_on_interface_list - computed: true, optional: true, required: false
  private _listenOnInterfaceList?: string; 
  public get listenOnInterfaceList() {
    return this.getStringAttribute('listen_on_interface_list');
  }
  public set listenOnInterfaceList(value: string) {
    this._listenOnInterfaceList = value;
  }
  public resetListenOnInterfaceList() {
    this._listenOnInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnInterfaceListInput() {
    return this._listenOnInterfaceList;
  }

  // mask_length - computed: true, optional: true, required: false
  private _maskLength?: string; 
  public get maskLength() {
    return this.getStringAttribute('mask_length');
  }
  public set maskLength(value: string) {
    this._maskLength = value;
  }
  public resetMaskLength() {
    this._maskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLengthInput() {
    return this._maskLength;
  }

  // mask_length6 - computed: true, optional: true, required: false
  private _maskLength6?: string; 
  public get maskLength6() {
    return this.getStringAttribute('mask_length6');
  }
  public set maskLength6(value: string) {
    this._maskLength6 = value;
  }
  public resetMaskLength6() {
    this._maskLength6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLength6Input() {
    return this._maskLength6;
  }

  // password - computed: true, optional: true, required: false
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

  // persist_aging_period - computed: true, optional: true, required: false
  private _persistAgingPeriod?: string; 
  public get persistAgingPeriod() {
    return this.getStringAttribute('persist_aging_period');
  }
  public set persistAgingPeriod(value: string) {
    this._persistAgingPeriod = value;
  }
  public resetPersistAgingPeriod() {
    this._persistAgingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistAgingPeriodInput() {
    return this._persistAgingPeriod;
  }

  // persist_mask_length - computed: true, optional: true, required: false
  private _persistMaskLength?: string; 
  public get persistMaskLength() {
    return this.getStringAttribute('persist_mask_length');
  }
  public set persistMaskLength(value: string) {
    this._persistMaskLength = value;
  }
  public resetPersistMaskLength() {
    this._persistMaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistMaskLengthInput() {
    return this._persistMaskLength;
  }

  // persist_mask_length6 - computed: true, optional: true, required: false
  private _persistMaskLength6?: string; 
  public get persistMaskLength6() {
    return this.getStringAttribute('persist_mask_length6');
  }
  public set persistMaskLength6(value: string) {
    this._persistMaskLength6 = value;
  }
  public resetPersistMaskLength6() {
    this._persistMaskLength6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistMaskLength6Input() {
    return this._persistMaskLength6;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: true, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // retry_interval - computed: true, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // retry_num - computed: true, optional: true, required: false
  private _retryNum?: string; 
  public get retryNum() {
    return this.getStringAttribute('retry_num');
  }
  public set retryNum(value: string) {
    this._retryNum = value;
  }
  public resetRetryNum() {
    this._retryNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryNumInput() {
    return this._retryNum;
  }

  // trust_ca_group - computed: true, optional: true, required: false
  private _trustCaGroup?: string; 
  public get trustCaGroup() {
    return this.getStringAttribute('trust_ca_group');
  }
  public set trustCaGroup(value: string) {
    this._trustCaGroup = value;
  }
  public resetTrustCaGroup() {
    this._trustCaGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustCaGroupInput() {
    return this._trustCaGroup;
  }

  // trust_inter_ca_group - computed: true, optional: true, required: false
  private _trustInterCaGroup?: string; 
  public get trustInterCaGroup() {
    return this.getStringAttribute('trust_inter_ca_group');
  }
  public set trustInterCaGroup(value: string) {
    this._trustInterCaGroup = value;
  }
  public resetTrustInterCaGroup() {
    this._trustInterCaGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInterCaGroupInput() {
    return this._trustInterCaGroup;
  }

  // user_defined_cert - computed: true, optional: true, required: false
  private _userDefinedCert?: string; 
  public get userDefinedCert() {
    return this.getStringAttribute('user_defined_cert');
  }
  public set userDefinedCert(value: string) {
    this._userDefinedCert = value;
  }
  public resetUserDefinedCert() {
    this._userDefinedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedCertInput() {
    return this._userDefinedCert;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aging_period: cdktf.stringToTerraform(this._agingPeriod),
      auth_type: cdktf.stringToTerraform(this._authType),
      ca_verify: cdktf.stringToTerraform(this._caVerify),
      cert: cdktf.stringToTerraform(this._cert),
      id: cdktf.stringToTerraform(this._id),
      ipv4_accessed_status: cdktf.stringToTerraform(this._ipv4AccessedStatus),
      ipv6_accessed_status: cdktf.stringToTerraform(this._ipv6AccessedStatus),
      listen_on_interface_all: cdktf.stringToTerraform(this._listenOnInterfaceAll),
      listen_on_interface_list: cdktf.stringToTerraform(this._listenOnInterfaceList),
      mask_length: cdktf.stringToTerraform(this._maskLength),
      mask_length6: cdktf.stringToTerraform(this._maskLength6),
      password: cdktf.stringToTerraform(this._password),
      persist_aging_period: cdktf.stringToTerraform(this._persistAgingPeriod),
      persist_mask_length: cdktf.stringToTerraform(this._persistMaskLength),
      persist_mask_length6: cdktf.stringToTerraform(this._persistMaskLength6),
      port: cdktf.stringToTerraform(this._port),
      proto: cdktf.stringToTerraform(this._proto),
      retry_interval: cdktf.stringToTerraform(this._retryInterval),
      retry_num: cdktf.stringToTerraform(this._retryNum),
      trust_ca_group: cdktf.stringToTerraform(this._trustCaGroup),
      trust_inter_ca_group: cdktf.stringToTerraform(this._trustInterCaGroup),
      user_defined_cert: cdktf.stringToTerraform(this._userDefinedCert),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aging_period: {
        value: cdktf.stringToHclTerraform(this._agingPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_verify: {
        value: cdktf.stringToHclTerraform(this._caVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
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
      ipv4_accessed_status: {
        value: cdktf.stringToHclTerraform(this._ipv4AccessedStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_accessed_status: {
        value: cdktf.stringToHclTerraform(this._ipv6AccessedStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen_on_interface_all: {
        value: cdktf.stringToHclTerraform(this._listenOnInterfaceAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen_on_interface_list: {
        value: cdktf.stringToHclTerraform(this._listenOnInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mask_length: {
        value: cdktf.stringToHclTerraform(this._maskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mask_length6: {
        value: cdktf.stringToHclTerraform(this._maskLength6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persist_aging_period: {
        value: cdktf.stringToHclTerraform(this._persistAgingPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persist_mask_length: {
        value: cdktf.stringToHclTerraform(this._persistMaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persist_mask_length6: {
        value: cdktf.stringToHclTerraform(this._persistMaskLength6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_interval: {
        value: cdktf.stringToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_num: {
        value: cdktf.stringToHclTerraform(this._retryNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ca_group: {
        value: cdktf.stringToHclTerraform(this._trustCaGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_inter_ca_group: {
        value: cdktf.stringToHclTerraform(this._trustInterCaGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_defined_cert: {
        value: cdktf.stringToHclTerraform(this._userDefinedCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
