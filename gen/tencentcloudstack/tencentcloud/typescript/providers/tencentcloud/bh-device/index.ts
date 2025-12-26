// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BhDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud account ID to which the asset belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#account_id BhDevice#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#id BhDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * device_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#device_set BhDevice#device_set}
  */
  readonly deviceSet: BhDeviceDeviceSet;
}
export interface BhDeviceDeviceSet {
  /**
  * Region to which the asset belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#ap_code BhDevice#ap_code}
  */
  readonly apCode?: string;
  /**
  * Region name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#ap_name BhDevice#ap_name}
  */
  readonly apName?: string;
  /**
  * Department ID to which the asset belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#department_id BhDevice#department_id}
  */
  readonly departmentId?: string;
  /**
  * Whether to enable SSL, 1: enable, 0: disable, only supports Redis assets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#enable_ssl BhDevice#enable_ssl}
  */
  readonly enableSsl?: number;
  /**
  * Asset instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#instance_id BhDevice#instance_id}
  */
  readonly instanceId?: string;
  /**
  * IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#ip BhDevice#ip}
  */
  readonly ip: string;
  /**
  * Asset multi-node: IP and port fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#ip_port_set BhDevice#ip_port_set}
  */
  readonly ipPortSet?: string[];
  /**
  * Host name, can be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#name BhDevice#name}
  */
  readonly name?: string;
  /**
  * The operating system name can only be one of the following: Host (Linux, Windows), Database (MySQL, SQL Server, MariaDB, PostgreSQL, MongoDBReplicaSet, MongoDBSharded, Redis), or Container (TKE, EKS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#os_name BhDevice#os_name}
  */
  readonly osName: string;
  /**
  * Management port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#port BhDevice#port}
  */
  readonly port: number;
  /**
  * Public IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#public_ip BhDevice#public_ip}
  */
  readonly publicIp?: string;
  /**
  * SSL certificate, required when EnableSSL is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#ssl_cert BhDevice#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * SSL certificate name, required when EnableSSL is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#ssl_cert_name BhDevice#ssl_cert_name}
  */
  readonly sslCertName?: string;
  /**
  * Subnet to which the asset belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#subnet_id BhDevice#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * VPC to which the asset belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#vpc_id BhDevice#vpc_id}
  */
  readonly vpcId?: string;
}

export function bhDeviceDeviceSetToTerraform(struct?: BhDeviceDeviceSetOutputReference | BhDeviceDeviceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_code: cdktf.stringToTerraform(struct!.apCode),
    ap_name: cdktf.stringToTerraform(struct!.apName),
    department_id: cdktf.stringToTerraform(struct!.departmentId),
    enable_ssl: cdktf.numberToTerraform(struct!.enableSsl),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_port_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPortSet),
    name: cdktf.stringToTerraform(struct!.name),
    os_name: cdktf.stringToTerraform(struct!.osName),
    port: cdktf.numberToTerraform(struct!.port),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    ssl_cert: cdktf.stringToTerraform(struct!.sslCert),
    ssl_cert_name: cdktf.stringToTerraform(struct!.sslCertName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function bhDeviceDeviceSetToHclTerraform(struct?: BhDeviceDeviceSetOutputReference | BhDeviceDeviceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_code: {
      value: cdktf.stringToHclTerraform(struct!.apCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_name: {
      value: cdktf.stringToHclTerraform(struct!.apName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    department_id: {
      value: cdktf.stringToHclTerraform(struct!.departmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ssl: {
      value: cdktf.numberToHclTerraform(struct!.enableSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_port_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPortSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_name: {
      value: cdktf.stringToHclTerraform(struct!.osName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert: {
      value: cdktf.stringToHclTerraform(struct!.sslCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.sslCertName),
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
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BhDeviceDeviceSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BhDeviceDeviceSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.apCode = this._apCode;
    }
    if (this._apName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apName = this._apName;
    }
    if (this._departmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.departmentId = this._departmentId;
    }
    if (this._enableSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsl = this._enableSsl;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipPortSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPortSet = this._ipPortSet;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._osName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osName = this._osName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._sslCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCert = this._sslCert;
    }
    if (this._sslCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertName = this._sslCertName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BhDeviceDeviceSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apCode = undefined;
      this._apName = undefined;
      this._departmentId = undefined;
      this._enableSsl = undefined;
      this._instanceId = undefined;
      this._ip = undefined;
      this._ipPortSet = undefined;
      this._name = undefined;
      this._osName = undefined;
      this._port = undefined;
      this._publicIp = undefined;
      this._sslCert = undefined;
      this._sslCertName = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apCode = value.apCode;
      this._apName = value.apName;
      this._departmentId = value.departmentId;
      this._enableSsl = value.enableSsl;
      this._instanceId = value.instanceId;
      this._ip = value.ip;
      this._ipPortSet = value.ipPortSet;
      this._name = value.name;
      this._osName = value.osName;
      this._port = value.port;
      this._publicIp = value.publicIp;
      this._sslCert = value.sslCert;
      this._sslCertName = value.sslCertName;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
    }
  }

  // ap_code - computed: true, optional: true, required: false
  private _apCode?: string; 
  public get apCode() {
    return this.getStringAttribute('ap_code');
  }
  public set apCode(value: string) {
    this._apCode = value;
  }
  public resetApCode() {
    this._apCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apCodeInput() {
    return this._apCode;
  }

  // ap_name - computed: false, optional: true, required: false
  private _apName?: string; 
  public get apName() {
    return this.getStringAttribute('ap_name');
  }
  public set apName(value: string) {
    this._apName = value;
  }
  public resetApName() {
    this._apName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apNameInput() {
    return this._apName;
  }

  // department_id - computed: false, optional: true, required: false
  private _departmentId?: string; 
  public get departmentId() {
    return this.getStringAttribute('department_id');
  }
  public set departmentId(value: string) {
    this._departmentId = value;
  }
  public resetDepartmentId() {
    this._departmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentIdInput() {
    return this._departmentId;
  }

  // enable_ssl - computed: true, optional: true, required: false
  private _enableSsl?: number; 
  public get enableSsl() {
    return this.getNumberAttribute('enable_ssl');
  }
  public set enableSsl(value: number) {
    this._enableSsl = value;
  }
  public resetEnableSsl() {
    this._enableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslInput() {
    return this._enableSsl;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_port_set - computed: true, optional: true, required: false
  private _ipPortSet?: string[]; 
  public get ipPortSet() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_port_set'));
  }
  public set ipPortSet(value: string[]) {
    this._ipPortSet = value;
  }
  public resetIpPortSet() {
    this._ipPortSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPortSetInput() {
    return this._ipPortSet;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os_name - computed: false, optional: false, required: true
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // ssl_cert - computed: false, optional: true, required: false
  private _sslCert?: string; 
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }
  public set sslCert(value: string) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // ssl_cert_name - computed: false, optional: true, required: false
  private _sslCertName?: string; 
  public get sslCertName() {
    return this.getStringAttribute('ssl_cert_name');
  }
  public set sslCertName(value: string) {
    this._sslCertName = value;
  }
  public resetSslCertName() {
    this._sslCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertNameInput() {
    return this._sslCertName;
  }

  // subnet_id - computed: false, optional: true, required: false
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

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device tencentcloud_bh_device}
*/
export class BhDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bh_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BhDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BhDevice to import
  * @param importFromId The id of the existing BhDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BhDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bh_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/bh_device tencentcloud_bh_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BhDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: BhDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bh_device',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._deviceSet.internalValue = config.deviceSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getNumberAttribute('device_id');
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

  // device_set - computed: false, optional: false, required: true
  private _deviceSet = new BhDeviceDeviceSetOutputReference(this, "device_set");
  public get deviceSet() {
    return this._deviceSet;
  }
  public putDeviceSet(value: BhDeviceDeviceSet) {
    this._deviceSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSetInput() {
    return this._deviceSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      device_set: bhDeviceDeviceSetToTerraform(this._deviceSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
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
      device_set: {
        value: bhDeviceDeviceSetToHclTerraform(this._deviceSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BhDeviceDeviceSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
