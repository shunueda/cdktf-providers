// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodSnmpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify SNMP community, default is "public" (Community String)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#community HealthMonitorMethodSnmpA#community}
  */
  readonly community?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#id HealthMonitorMethodSnmpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#name HealthMonitorMethodSnmpA#name}
  */
  readonly name: string;
  /**
  * SNMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#snmp HealthMonitorMethodSnmpA#snmp}
  */
  readonly snmp?: number;
  /**
  * Specify SNMP port, default is 161 (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#snmp_port HealthMonitorMethodSnmpA#snmp_port}
  */
  readonly snmpPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#uuid HealthMonitorMethodSnmpA#uuid}
  */
  readonly uuid?: string;
  /**
  * oid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#oid HealthMonitorMethodSnmpA#oid}
  */
  readonly oid?: HealthMonitorMethodSnmpOidA;
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#operation HealthMonitorMethodSnmpA#operation}
  */
  readonly operation?: HealthMonitorMethodSnmpOperationA;
}
export interface HealthMonitorMethodSnmpOidA {
  /**
  * Specify the format in ASN.1 style
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#asn HealthMonitorMethodSnmpA#asn}
  */
  readonly asn?: string;
  /**
  * 'sysDescr': The MIB-2 OID of system description, 1.1.0; 'sysUpTime': The MIB-2 OID of system up time, 1.3.0; 'sysName': The MIB-2 OID of system nume, 1.5.0;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#mib HealthMonitorMethodSnmpA#mib}
  */
  readonly mib?: string;
}

export function healthMonitorMethodSnmpOidAToTerraform(struct?: HealthMonitorMethodSnmpOidAOutputReference | HealthMonitorMethodSnmpOidA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.stringToTerraform(struct!.asn),
    mib: cdktf.stringToTerraform(struct!.mib),
  }
}


export function healthMonitorMethodSnmpOidAToHclTerraform(struct?: HealthMonitorMethodSnmpOidAOutputReference | HealthMonitorMethodSnmpOidA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.stringToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mib: {
      value: cdktf.stringToHclTerraform(struct!.mib),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodSnmpOidAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodSnmpOidA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._mib !== undefined) {
      hasAnyValues = true;
      internalValueResult.mib = this._mib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodSnmpOidA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._mib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._mib = value.mib;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // mib - computed: false, optional: true, required: false
  private _mib?: string; 
  public get mib() {
    return this.getStringAttribute('mib');
  }
  public set mib(value: string) {
    this._mib = value;
  }
  public resetMib() {
    this._mib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mibInput() {
    return this._mib;
  }
}
export interface HealthMonitorMethodSnmpOperationA {
  /**
  * 'getnext': Get-Next-Request command; 'get': Get-Request command;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#oper_type HealthMonitorMethodSnmpA#oper_type}
  */
  readonly operType?: string;
}

export function healthMonitorMethodSnmpOperationAToTerraform(struct?: HealthMonitorMethodSnmpOperationAOutputReference | HealthMonitorMethodSnmpOperationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_type: cdktf.stringToTerraform(struct!.operType),
  }
}


export function healthMonitorMethodSnmpOperationAToHclTerraform(struct?: HealthMonitorMethodSnmpOperationAOutputReference | HealthMonitorMethodSnmpOperationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_type: {
      value: cdktf.stringToHclTerraform(struct!.operType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodSnmpOperationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodSnmpOperationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operType = this._operType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodSnmpOperationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operType = value.operType;
    }
  }

  // oper_type - computed: false, optional: true, required: false
  private _operType?: string; 
  public get operType() {
    return this.getStringAttribute('oper_type');
  }
  public set operType(value: string) {
    this._operType = value;
  }
  public resetOperType() {
    this._operType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operTypeInput() {
    return this._operType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp thunder_health_monitor_method_snmp}
*/
export class HealthMonitorMethodSnmpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodSnmpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodSnmpA to import
  * @param importFromId The id of the existing HealthMonitorMethodSnmpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodSnmpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_snmp thunder_health_monitor_method_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodSnmpAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodSnmpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_snmp',
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
    this._community = config.community;
    this._id = config.id;
    this._name = config.name;
    this._snmp = config.snmp;
    this._snmpPort = config.snmpPort;
    this._uuid = config.uuid;
    this._oid.internalValue = config.oid;
    this._operation.internalValue = config.operation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // snmp - computed: false, optional: true, required: false
  private _snmp?: number; 
  public get snmp() {
    return this.getNumberAttribute('snmp');
  }
  public set snmp(value: number) {
    this._snmp = value;
  }
  public resetSnmp() {
    this._snmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp;
  }

  // snmp_port - computed: false, optional: true, required: false
  private _snmpPort?: number; 
  public get snmpPort() {
    return this.getNumberAttribute('snmp_port');
  }
  public set snmpPort(value: number) {
    this._snmpPort = value;
  }
  public resetSnmpPort() {
    this._snmpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpPortInput() {
    return this._snmpPort;
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

  // oid - computed: false, optional: true, required: false
  private _oid = new HealthMonitorMethodSnmpOidAOutputReference(this, "oid");
  public get oid() {
    return this._oid;
  }
  public putOid(value: HealthMonitorMethodSnmpOidA) {
    this._oid.internalValue = value;
  }
  public resetOid() {
    this._oid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid.internalValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation = new HealthMonitorMethodSnmpOperationAOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: HealthMonitorMethodSnmpOperationA) {
    this._operation.internalValue = value;
  }
  public resetOperation() {
    this._operation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      community: cdktf.stringToTerraform(this._community),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      snmp: cdktf.numberToTerraform(this._snmp),
      snmp_port: cdktf.numberToTerraform(this._snmpPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      oid: healthMonitorMethodSnmpOidAToTerraform(this._oid.internalValue),
      operation: healthMonitorMethodSnmpOperationAToTerraform(this._operation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      community: {
        value: cdktf.stringToHclTerraform(this._community),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp: {
        value: cdktf.numberToHclTerraform(this._snmp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp_port: {
        value: cdktf.numberToHclTerraform(this._snmpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oid: {
        value: healthMonitorMethodSnmpOidAToHclTerraform(this._oid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorMethodSnmpOidAList",
      },
      operation: {
        value: healthMonitorMethodSnmpOperationAToHclTerraform(this._operation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorMethodSnmpOperationAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
