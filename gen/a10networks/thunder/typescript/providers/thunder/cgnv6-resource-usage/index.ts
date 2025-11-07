// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6ResourceUsageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Total configurable CGNV6 Fixed NAT inside users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage#fixed_nat_inside_user_count Cgnv6ResourceUsage#fixed_nat_inside_user_count}
  */
  readonly fixedNatInsideUserCount?: number;
  /**
  * Total configurable CGNV6 Fixed NAT addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage#fixed_nat_ip_addr_count Cgnv6ResourceUsage#fixed_nat_ip_addr_count}
  */
  readonly fixedNatIpAddrCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage#id Cgnv6ResourceUsage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Total configurable CGNV6 NAT Pool addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage#lsn_nat_addr_count Cgnv6ResourceUsage#lsn_nat_addr_count}
  */
  readonly lsnNatAddrCount?: number;
  /**
  * Total configurable CGNV6 RADIUS Table entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage#radius_table_size Cgnv6ResourceUsage#radius_table_size}
  */
  readonly radiusTableSize?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage#uuid Cgnv6ResourceUsage#uuid}
  */
  readonly uuid?: string;
  /**
  * stateless_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage#stateless_entries Cgnv6ResourceUsage#stateless_entries}
  */
  readonly statelessEntries?: Cgnv6ResourceUsageStatelessEntries;
}
export interface Cgnv6ResourceUsageStatelessEntries {
  /**
  * Helper size for CGN Stateless Technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage#l4_session_count Cgnv6ResourceUsage#l4_session_count}
  */
  readonly l4SessionCount?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage#uuid Cgnv6ResourceUsage#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6ResourceUsageStatelessEntriesToTerraform(struct?: Cgnv6ResourceUsageStatelessEntriesOutputReference | Cgnv6ResourceUsageStatelessEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l4_session_count: cdktf.numberToTerraform(struct!.l4SessionCount),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6ResourceUsageStatelessEntriesToHclTerraform(struct?: Cgnv6ResourceUsageStatelessEntriesOutputReference | Cgnv6ResourceUsageStatelessEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l4_session_count: {
      value: cdktf.numberToHclTerraform(struct!.l4SessionCount),
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

export class Cgnv6ResourceUsageStatelessEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6ResourceUsageStatelessEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l4SessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionCount = this._l4SessionCount;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6ResourceUsageStatelessEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l4SessionCount = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l4SessionCount = value.l4SessionCount;
      this._uuid = value.uuid;
    }
  }

  // l4_session_count - computed: false, optional: true, required: false
  private _l4SessionCount?: number; 
  public get l4SessionCount() {
    return this.getNumberAttribute('l4_session_count');
  }
  public set l4SessionCount(value: number) {
    this._l4SessionCount = value;
  }
  public resetL4SessionCount() {
    this._l4SessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionCountInput() {
    return this._l4SessionCount;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage thunder_cgnv6_resource_usage}
*/
export class Cgnv6ResourceUsage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_resource_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6ResourceUsage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6ResourceUsage to import
  * @param importFromId The id of the existing Cgnv6ResourceUsage that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6ResourceUsage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_resource_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage thunder_cgnv6_resource_usage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6ResourceUsageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6ResourceUsageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_resource_usage',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fixedNatInsideUserCount = config.fixedNatInsideUserCount;
    this._fixedNatIpAddrCount = config.fixedNatIpAddrCount;
    this._id = config.id;
    this._lsnNatAddrCount = config.lsnNatAddrCount;
    this._radiusTableSize = config.radiusTableSize;
    this._uuid = config.uuid;
    this._statelessEntries.internalValue = config.statelessEntries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fixed_nat_inside_user_count - computed: false, optional: true, required: false
  private _fixedNatInsideUserCount?: number; 
  public get fixedNatInsideUserCount() {
    return this.getNumberAttribute('fixed_nat_inside_user_count');
  }
  public set fixedNatInsideUserCount(value: number) {
    this._fixedNatInsideUserCount = value;
  }
  public resetFixedNatInsideUserCount() {
    this._fixedNatInsideUserCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatInsideUserCountInput() {
    return this._fixedNatInsideUserCount;
  }

  // fixed_nat_ip_addr_count - computed: false, optional: true, required: false
  private _fixedNatIpAddrCount?: number; 
  public get fixedNatIpAddrCount() {
    return this.getNumberAttribute('fixed_nat_ip_addr_count');
  }
  public set fixedNatIpAddrCount(value: number) {
    this._fixedNatIpAddrCount = value;
  }
  public resetFixedNatIpAddrCount() {
    this._fixedNatIpAddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatIpAddrCountInput() {
    return this._fixedNatIpAddrCount;
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

  // lsn_nat_addr_count - computed: false, optional: true, required: false
  private _lsnNatAddrCount?: number; 
  public get lsnNatAddrCount() {
    return this.getNumberAttribute('lsn_nat_addr_count');
  }
  public set lsnNatAddrCount(value: number) {
    this._lsnNatAddrCount = value;
  }
  public resetLsnNatAddrCount() {
    this._lsnNatAddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnNatAddrCountInput() {
    return this._lsnNatAddrCount;
  }

  // radius_table_size - computed: false, optional: true, required: false
  private _radiusTableSize?: number; 
  public get radiusTableSize() {
    return this.getNumberAttribute('radius_table_size');
  }
  public set radiusTableSize(value: number) {
    this._radiusTableSize = value;
  }
  public resetRadiusTableSize() {
    this._radiusTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeInput() {
    return this._radiusTableSize;
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

  // stateless_entries - computed: false, optional: true, required: false
  private _statelessEntries = new Cgnv6ResourceUsageStatelessEntriesOutputReference(this, "stateless_entries");
  public get statelessEntries() {
    return this._statelessEntries;
  }
  public putStatelessEntries(value: Cgnv6ResourceUsageStatelessEntries) {
    this._statelessEntries.internalValue = value;
  }
  public resetStatelessEntries() {
    this._statelessEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEntriesInput() {
    return this._statelessEntries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fixed_nat_inside_user_count: cdktf.numberToTerraform(this._fixedNatInsideUserCount),
      fixed_nat_ip_addr_count: cdktf.numberToTerraform(this._fixedNatIpAddrCount),
      id: cdktf.stringToTerraform(this._id),
      lsn_nat_addr_count: cdktf.numberToTerraform(this._lsnNatAddrCount),
      radius_table_size: cdktf.numberToTerraform(this._radiusTableSize),
      uuid: cdktf.stringToTerraform(this._uuid),
      stateless_entries: cgnv6ResourceUsageStatelessEntriesToTerraform(this._statelessEntries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fixed_nat_inside_user_count: {
        value: cdktf.numberToHclTerraform(this._fixedNatInsideUserCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fixed_nat_ip_addr_count: {
        value: cdktf.numberToHclTerraform(this._fixedNatIpAddrCount),
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
      lsn_nat_addr_count: {
        value: cdktf.numberToHclTerraform(this._lsnNatAddrCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_table_size: {
        value: cdktf.numberToHclTerraform(this._radiusTableSize),
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
      stateless_entries: {
        value: cgnv6ResourceUsageStatelessEntriesToHclTerraform(this._statelessEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6ResourceUsageStatelessEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
