// https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiDdosRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#backup_server AntiDdosRule#backup_server}
  */
  readonly backupServer?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#comment AntiDdosRule#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#id AntiDdosRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#instance_id AntiDdosRule#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#ip AntiDdosRule#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#port AntiDdosRule#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#real_server_detection AntiDdosRule#real_server_detection}
  */
  readonly realServerDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#real_server_type AntiDdosRule#real_server_type}
  */
  readonly realServerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#toa_id AntiDdosRule#toa_id}
  */
  readonly toaId?: number;
  /**
  * real_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#real_servers AntiDdosRule#real_servers}
  */
  readonly realServers: AntiDdosRuleRealServers[] | cdktf.IResolvable;
}
export interface AntiDdosRuleRealServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#address AntiDdosRule#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#port AntiDdosRule#port}
  */
  readonly port?: number;
}

export function antiDdosRuleRealServersToTerraform(struct?: AntiDdosRuleRealServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function antiDdosRuleRealServersToHclTerraform(struct?: AntiDdosRuleRealServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiDdosRuleRealServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiDdosRuleRealServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiDdosRuleRealServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class AntiDdosRuleRealServersList extends cdktf.ComplexList {
  public internalValue? : AntiDdosRuleRealServers[] | cdktf.IResolvable

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
  public get(index: number): AntiDdosRuleRealServersOutputReference {
    return new AntiDdosRuleRealServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule ucloud_anti_ddos_rule}
*/
export class AntiDdosRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ucloud_anti_ddos_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiDdosRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiDdosRule to import
  * @param importFromId The id of the existing AntiDdosRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiDdosRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ucloud_anti_ddos_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/anti_ddos_rule ucloud_anti_ddos_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiDdosRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AntiDdosRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'ucloud_anti_ddos_rule',
      terraformGeneratorMetadata: {
        providerName: 'ucloud',
        providerVersion: '1.39.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupServer = config.backupServer;
    this._comment = config.comment;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ip = config.ip;
    this._port = config.port;
    this._realServerDetection = config.realServerDetection;
    this._realServerType = config.realServerType;
    this._toaId = config.toaId;
    this._realServers.internalValue = config.realServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_server - computed: false, optional: true, required: false
  private _backupServer?: { [key: string]: string }; 
  public get backupServer() {
    return this.getStringMapAttribute('backup_server');
  }
  public set backupServer(value: { [key: string]: string }) {
    this._backupServer = value;
  }
  public resetBackupServer() {
    this._backupServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupServerInput() {
    return this._backupServer;
  }

  // comment - computed: true, optional: true, required: false
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // real_server_detection - computed: false, optional: true, required: false
  private _realServerDetection?: boolean | cdktf.IResolvable; 
  public get realServerDetection() {
    return this.getBooleanAttribute('real_server_detection');
  }
  public set realServerDetection(value: boolean | cdktf.IResolvable) {
    this._realServerDetection = value;
  }
  public resetRealServerDetection() {
    this._realServerDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerDetectionInput() {
    return this._realServerDetection;
  }

  // real_server_type - computed: false, optional: false, required: true
  private _realServerType?: string; 
  public get realServerType() {
    return this.getStringAttribute('real_server_type');
  }
  public set realServerType(value: string) {
    this._realServerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerTypeInput() {
    return this._realServerType;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_index - computed: true, optional: false, required: false
  public get ruleIndex() {
    return this.getNumberAttribute('rule_index');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // toa_id - computed: false, optional: true, required: false
  private _toaId?: number; 
  public get toaId() {
    return this.getNumberAttribute('toa_id');
  }
  public set toaId(value: number) {
    this._toaId = value;
  }
  public resetToaId() {
    this._toaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toaIdInput() {
    return this._toaId;
  }

  // real_servers - computed: false, optional: false, required: true
  private _realServers = new AntiDdosRuleRealServersList(this, "real_servers", false);
  public get realServers() {
    return this._realServers;
  }
  public putRealServers(value: AntiDdosRuleRealServers[] | cdktf.IResolvable) {
    this._realServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realServersInput() {
    return this._realServers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_server: cdktf.hashMapper(cdktf.stringToTerraform)(this._backupServer),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip: cdktf.stringToTerraform(this._ip),
      port: cdktf.numberToTerraform(this._port),
      real_server_detection: cdktf.booleanToTerraform(this._realServerDetection),
      real_server_type: cdktf.stringToTerraform(this._realServerType),
      toa_id: cdktf.numberToTerraform(this._toaId),
      real_servers: cdktf.listMapper(antiDdosRuleRealServersToTerraform, true)(this._realServers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_server: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._backupServer),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      real_server_detection: {
        value: cdktf.booleanToHclTerraform(this._realServerDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      real_server_type: {
        value: cdktf.stringToHclTerraform(this._realServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      toa_id: {
        value: cdktf.numberToHclTerraform(this._toaId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      real_servers: {
        value: cdktf.listMapperHcl(antiDdosRuleRealServersToHclTerraform, true)(this._realServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiDdosRuleRealServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
