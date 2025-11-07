// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_unnumbered
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpUnnumberedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_unnumbered#id IpUnnumbered#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_unnumbered#uuid IpUnnumbered#uuid}
  */
  readonly uuid?: string;
  /**
  * use_source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_unnumbered#use_source_ip IpUnnumbered#use_source_ip}
  */
  readonly useSourceIp?: IpUnnumberedUseSourceIp;
}
export interface IpUnnumberedUseSourceIp {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_unnumbered#update_source_ip IpUnnumbered#update_source_ip}
  */
  readonly updateSourceIp?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_unnumbered#uuid IpUnnumbered#uuid}
  */
  readonly uuid?: string;
}

export function ipUnnumberedUseSourceIpToTerraform(struct?: IpUnnumberedUseSourceIpOutputReference | IpUnnumberedUseSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update_source_ip: cdktf.stringToTerraform(struct!.updateSourceIp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ipUnnumberedUseSourceIpToHclTerraform(struct?: IpUnnumberedUseSourceIpOutputReference | IpUnnumberedUseSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    update_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceIp),
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

export class IpUnnumberedUseSourceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpUnnumberedUseSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._updateSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceIp = this._updateSourceIp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpUnnumberedUseSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._updateSourceIp = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._updateSourceIp = value.updateSourceIp;
      this._uuid = value.uuid;
    }
  }

  // update_source_ip - computed: false, optional: true, required: false
  private _updateSourceIp?: string; 
  public get updateSourceIp() {
    return this.getStringAttribute('update_source_ip');
  }
  public set updateSourceIp(value: string) {
    this._updateSourceIp = value;
  }
  public resetUpdateSourceIp() {
    this._updateSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceIpInput() {
    return this._updateSourceIp;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_unnumbered thunder_ip_unnumbered}
*/
export class IpUnnumbered extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_unnumbered";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpUnnumbered resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpUnnumbered to import
  * @param importFromId The id of the existing IpUnnumbered that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_unnumbered#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpUnnumbered to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_unnumbered", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_unnumbered thunder_ip_unnumbered} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpUnnumberedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpUnnumberedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_unnumbered',
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._useSourceIp.internalValue = config.useSourceIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // use_source_ip - computed: false, optional: true, required: false
  private _useSourceIp = new IpUnnumberedUseSourceIpOutputReference(this, "use_source_ip");
  public get useSourceIp() {
    return this._useSourceIp;
  }
  public putUseSourceIp(value: IpUnnumberedUseSourceIp) {
    this._useSourceIp.internalValue = value;
  }
  public resetUseSourceIp() {
    this._useSourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceIpInput() {
    return this._useSourceIp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      use_source_ip: ipUnnumberedUseSourceIpToTerraform(this._useSourceIp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      use_source_ip: {
        value: ipUnnumberedUseSourceIpToHclTerraform(this._useSourceIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpUnnumberedUseSourceIpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
