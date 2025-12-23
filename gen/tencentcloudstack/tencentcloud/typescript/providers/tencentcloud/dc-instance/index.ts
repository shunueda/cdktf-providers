// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access point of connection.You can call `DescribeAccessPoints` to get the region ID. The selected access point must exist and be available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#access_point_id DcInstance#access_point_id}
  */
  readonly accessPointId: string;
  /**
  * Connection port bandwidth in Mbps. Value range: [2,10240]. Default value: 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#bandwidth DcInstance#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Circuit code of a connection, which is provided by the ISP or connection provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#circuit_code DcInstance#circuit_code}
  */
  readonly circuitCode?: string;
  /**
  * User-side IP address for connection debugging, which is automatically assigned by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#customer_address DcInstance#customer_address}
  */
  readonly customerAddress?: string;
  /**
  * Email address of connection applicant, which is obtained from the account system by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#customer_contact_mail DcInstance#customer_contact_mail}
  */
  readonly customerContactMail?: string;
  /**
  * Contact number of connection applicant, which is obtained from the account system by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#customer_contact_number DcInstance#customer_contact_number}
  */
  readonly customerContactNumber?: string;
  /**
  * Name of connection applicant, which is obtained from the account system by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#customer_name DcInstance#customer_name}
  */
  readonly customerName?: string;
  /**
  * Connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#direct_connect_name DcInstance#direct_connect_name}
  */
  readonly directConnectName: string;
  /**
  * Fault reporting contact number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#fault_report_contact_number DcInstance#fault_report_contact_number}
  */
  readonly faultReportContactNumber?: string;
  /**
  * Fault reporting contact person.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#fault_report_contact_person DcInstance#fault_report_contact_person}
  */
  readonly faultReportContactPerson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#id DcInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ISP that provides connections. Valid values: ChinaTelecom (China Telecom), ChinaMobile (China Mobile), ChinaUnicom (China Unicom), In-houseWiring (in-house wiring), ChinaOther (other Chinese ISPs), InternationalOperator (international ISPs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#line_operator DcInstance#line_operator}
  */
  readonly lineOperator: string;
  /**
  * Local IDC location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#location DcInstance#location}
  */
  readonly location?: string;
  /**
  * Port type of connection. Valid values: 100Base-T (100-Megabit electrical Ethernet interface), 1000Base-T (1-Gigabit electrical Ethernet interface), 1000Base-LX (1-Gigabit single-module optical Ethernet interface; 10 KM), 10GBase-T (10-Gigabit electrical Ethernet interface), 10GBase-LR (10-Gigabit single-module optical Ethernet interface; 10 KM). Default value: 1000Base-LX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#port_type DcInstance#port_type}
  */
  readonly portType: string;
  /**
  * ID of redundant connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#redundant_direct_connect_id DcInstance#redundant_direct_connect_id}
  */
  readonly redundantDirectConnectId?: string;
  /**
  * Whether the connection applicant has signed the service agreement. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#sign_law DcInstance#sign_law}
  */
  readonly signLaw?: boolean | cdktf.IResolvable;
  /**
  * Tencent-side IP address for connection debugging, which is automatically assigned by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#tencent_address DcInstance#tencent_address}
  */
  readonly tencentAddress?: string;
  /**
  * VLAN for connection debugging, which is enabled and automatically assigned by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#vlan DcInstance#vlan}
  */
  readonly vlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance tencentcloud_dc_instance}
*/
export class DcInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dc_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcInstance to import
  * @param importFromId The id of the existing DcInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dc_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dc_instance tencentcloud_dc_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DcInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dc_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPointId = config.accessPointId;
    this._bandwidth = config.bandwidth;
    this._circuitCode = config.circuitCode;
    this._customerAddress = config.customerAddress;
    this._customerContactMail = config.customerContactMail;
    this._customerContactNumber = config.customerContactNumber;
    this._customerName = config.customerName;
    this._directConnectName = config.directConnectName;
    this._faultReportContactNumber = config.faultReportContactNumber;
    this._faultReportContactPerson = config.faultReportContactPerson;
    this._id = config.id;
    this._lineOperator = config.lineOperator;
    this._location = config.location;
    this._portType = config.portType;
    this._redundantDirectConnectId = config.redundantDirectConnectId;
    this._signLaw = config.signLaw;
    this._tencentAddress = config.tencentAddress;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_id - computed: false, optional: false, required: true
  private _accessPointId?: string; 
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }
  public set accessPointId(value: string) {
    this._accessPointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointIdInput() {
    return this._accessPointId;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // circuit_code - computed: false, optional: true, required: false
  private _circuitCode?: string; 
  public get circuitCode() {
    return this.getStringAttribute('circuit_code');
  }
  public set circuitCode(value: string) {
    this._circuitCode = value;
  }
  public resetCircuitCode() {
    this._circuitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitCodeInput() {
    return this._circuitCode;
  }

  // customer_address - computed: false, optional: true, required: false
  private _customerAddress?: string; 
  public get customerAddress() {
    return this.getStringAttribute('customer_address');
  }
  public set customerAddress(value: string) {
    this._customerAddress = value;
  }
  public resetCustomerAddress() {
    this._customerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAddressInput() {
    return this._customerAddress;
  }

  // customer_contact_mail - computed: false, optional: true, required: false
  private _customerContactMail?: string; 
  public get customerContactMail() {
    return this.getStringAttribute('customer_contact_mail');
  }
  public set customerContactMail(value: string) {
    this._customerContactMail = value;
  }
  public resetCustomerContactMail() {
    this._customerContactMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactMailInput() {
    return this._customerContactMail;
  }

  // customer_contact_number - computed: true, optional: true, required: false
  private _customerContactNumber?: string; 
  public get customerContactNumber() {
    return this.getStringAttribute('customer_contact_number');
  }
  public set customerContactNumber(value: string) {
    this._customerContactNumber = value;
  }
  public resetCustomerContactNumber() {
    this._customerContactNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactNumberInput() {
    return this._customerContactNumber;
  }

  // customer_name - computed: false, optional: true, required: false
  private _customerName?: string; 
  public get customerName() {
    return this.getStringAttribute('customer_name');
  }
  public set customerName(value: string) {
    this._customerName = value;
  }
  public resetCustomerName() {
    this._customerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerNameInput() {
    return this._customerName;
  }

  // direct_connect_name - computed: false, optional: false, required: true
  private _directConnectName?: string; 
  public get directConnectName() {
    return this.getStringAttribute('direct_connect_name');
  }
  public set directConnectName(value: string) {
    this._directConnectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectNameInput() {
    return this._directConnectName;
  }

  // fault_report_contact_number - computed: false, optional: true, required: false
  private _faultReportContactNumber?: string; 
  public get faultReportContactNumber() {
    return this.getStringAttribute('fault_report_contact_number');
  }
  public set faultReportContactNumber(value: string) {
    this._faultReportContactNumber = value;
  }
  public resetFaultReportContactNumber() {
    this._faultReportContactNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultReportContactNumberInput() {
    return this._faultReportContactNumber;
  }

  // fault_report_contact_person - computed: false, optional: true, required: false
  private _faultReportContactPerson?: string; 
  public get faultReportContactPerson() {
    return this.getStringAttribute('fault_report_contact_person');
  }
  public set faultReportContactPerson(value: string) {
    this._faultReportContactPerson = value;
  }
  public resetFaultReportContactPerson() {
    this._faultReportContactPerson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultReportContactPersonInput() {
    return this._faultReportContactPerson;
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

  // line_operator - computed: false, optional: false, required: true
  private _lineOperator?: string; 
  public get lineOperator() {
    return this.getStringAttribute('line_operator');
  }
  public set lineOperator(value: string) {
    this._lineOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineOperatorInput() {
    return this._lineOperator;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // port_type - computed: false, optional: false, required: true
  private _portType?: string; 
  public get portType() {
    return this.getStringAttribute('port_type');
  }
  public set portType(value: string) {
    this._portType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeInput() {
    return this._portType;
  }

  // redundant_direct_connect_id - computed: false, optional: true, required: false
  private _redundantDirectConnectId?: string; 
  public get redundantDirectConnectId() {
    return this.getStringAttribute('redundant_direct_connect_id');
  }
  public set redundantDirectConnectId(value: string) {
    this._redundantDirectConnectId = value;
  }
  public resetRedundantDirectConnectId() {
    this._redundantDirectConnectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantDirectConnectIdInput() {
    return this._redundantDirectConnectId;
  }

  // sign_law - computed: true, optional: true, required: false
  private _signLaw?: boolean | cdktf.IResolvable; 
  public get signLaw() {
    return this.getBooleanAttribute('sign_law');
  }
  public set signLaw(value: boolean | cdktf.IResolvable) {
    this._signLaw = value;
  }
  public resetSignLaw() {
    this._signLaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signLawInput() {
    return this._signLaw;
  }

  // tencent_address - computed: false, optional: true, required: false
  private _tencentAddress?: string; 
  public get tencentAddress() {
    return this.getStringAttribute('tencent_address');
  }
  public set tencentAddress(value: string) {
    this._tencentAddress = value;
  }
  public resetTencentAddress() {
    this._tencentAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tencentAddressInput() {
    return this._tencentAddress;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_point_id: cdktf.stringToTerraform(this._accessPointId),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      circuit_code: cdktf.stringToTerraform(this._circuitCode),
      customer_address: cdktf.stringToTerraform(this._customerAddress),
      customer_contact_mail: cdktf.stringToTerraform(this._customerContactMail),
      customer_contact_number: cdktf.stringToTerraform(this._customerContactNumber),
      customer_name: cdktf.stringToTerraform(this._customerName),
      direct_connect_name: cdktf.stringToTerraform(this._directConnectName),
      fault_report_contact_number: cdktf.stringToTerraform(this._faultReportContactNumber),
      fault_report_contact_person: cdktf.stringToTerraform(this._faultReportContactPerson),
      id: cdktf.stringToTerraform(this._id),
      line_operator: cdktf.stringToTerraform(this._lineOperator),
      location: cdktf.stringToTerraform(this._location),
      port_type: cdktf.stringToTerraform(this._portType),
      redundant_direct_connect_id: cdktf.stringToTerraform(this._redundantDirectConnectId),
      sign_law: cdktf.booleanToTerraform(this._signLaw),
      tencent_address: cdktf.stringToTerraform(this._tencentAddress),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_point_id: {
        value: cdktf.stringToHclTerraform(this._accessPointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      circuit_code: {
        value: cdktf.stringToHclTerraform(this._circuitCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_address: {
        value: cdktf.stringToHclTerraform(this._customerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_contact_mail: {
        value: cdktf.stringToHclTerraform(this._customerContactMail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_contact_number: {
        value: cdktf.stringToHclTerraform(this._customerContactNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_name: {
        value: cdktf.stringToHclTerraform(this._customerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_connect_name: {
        value: cdktf.stringToHclTerraform(this._directConnectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_report_contact_number: {
        value: cdktf.stringToHclTerraform(this._faultReportContactNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_report_contact_person: {
        value: cdktf.stringToHclTerraform(this._faultReportContactPerson),
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
      line_operator: {
        value: cdktf.stringToHclTerraform(this._lineOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_type: {
        value: cdktf.stringToHclTerraform(this._portType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundant_direct_connect_id: {
        value: cdktf.stringToHclTerraform(this._redundantDirectConnectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_law: {
        value: cdktf.booleanToHclTerraform(this._signLaw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tencent_address: {
        value: cdktf.stringToHclTerraform(this._tencentAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
