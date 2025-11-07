// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualGatewayLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_link#dry_run VirtualGatewayLink#dry_run}
  */
  readonly dryRun?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_link#id VirtualGatewayLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_link#net_id VirtualGatewayLink#net_id}
  */
  readonly netId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_link#virtual_gateway_id VirtualGatewayLink#virtual_gateway_id}
  */
  readonly virtualGatewayId: string;
}
export interface VirtualGatewayLinkNetToVirtualGatewayLinks {
}

export function virtualGatewayLinkNetToVirtualGatewayLinksToTerraform(struct?: VirtualGatewayLinkNetToVirtualGatewayLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualGatewayLinkNetToVirtualGatewayLinksToHclTerraform(struct?: VirtualGatewayLinkNetToVirtualGatewayLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualGatewayLinkNetToVirtualGatewayLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualGatewayLinkNetToVirtualGatewayLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualGatewayLinkNetToVirtualGatewayLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // net_id - computed: true, optional: false, required: false
  public get netId() {
    return this.getStringAttribute('net_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class VirtualGatewayLinkNetToVirtualGatewayLinksList extends cdktf.ComplexList {

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
  public get(index: number): VirtualGatewayLinkNetToVirtualGatewayLinksOutputReference {
    return new VirtualGatewayLinkNetToVirtualGatewayLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_link outscale_virtual_gateway_link}
*/
export class VirtualGatewayLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_virtual_gateway_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualGatewayLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualGatewayLink to import
  * @param importFromId The id of the existing VirtualGatewayLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualGatewayLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_virtual_gateway_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_link outscale_virtual_gateway_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualGatewayLinkConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualGatewayLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_virtual_gateway_link',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._netId = config.netId;
    this._virtualGatewayId = config.virtualGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dry_run - computed: true, optional: true, required: false
  private _dryRun?: string; 
  public get dryRun() {
    return this.getStringAttribute('dry_run');
  }
  public set dryRun(value: string) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // net_id - computed: false, optional: false, required: true
  private _netId?: string; 
  public get netId() {
    return this.getStringAttribute('net_id');
  }
  public set netId(value: string) {
    this._netId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netIdInput() {
    return this._netId;
  }

  // net_to_virtual_gateway_links - computed: true, optional: false, required: false
  private _netToVirtualGatewayLinks = new VirtualGatewayLinkNetToVirtualGatewayLinksList(this, "net_to_virtual_gateway_links", false);
  public get netToVirtualGatewayLinks() {
    return this._netToVirtualGatewayLinks;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // virtual_gateway_id - computed: false, optional: false, required: true
  private _virtualGatewayId?: string; 
  public get virtualGatewayId() {
    return this.getStringAttribute('virtual_gateway_id');
  }
  public set virtualGatewayId(value: string) {
    this._virtualGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayIdInput() {
    return this._virtualGatewayId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dry_run: cdktf.stringToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      net_id: cdktf.stringToTerraform(this._netId),
      virtual_gateway_id: cdktf.stringToTerraform(this._virtualGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dry_run: {
        value: cdktf.stringToHclTerraform(this._dryRun),
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
      net_id: {
        value: cdktf.stringToHclTerraform(this._netId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_gateway_id: {
        value: cdktf.stringToHclTerraform(this._virtualGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
