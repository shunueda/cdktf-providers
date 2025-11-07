// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#certificate EdgeHostname#certificate}
  */
  readonly certificate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#contract_id EdgeHostname#contract_id}
  */
  readonly contractId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#edge_hostname EdgeHostname#edge_hostname}
  */
  readonly edgeHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#group_id EdgeHostname#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#id EdgeHostname#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#ip_behavior EdgeHostname#ip_behavior}
  */
  readonly ipBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#product_id EdgeHostname#product_id}
  */
  readonly productId?: string;
  /**
  * Email address that should receive updates on the IP behavior update request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#status_update_email EdgeHostname#status_update_email}
  */
  readonly statusUpdateEmail?: string[];
  /**
  * The time to live, or number of seconds to keep an edge hostname assigned to a map or target. If not provided default value for product is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#ttl EdgeHostname#ttl}
  */
  readonly ttl?: number;
  /**
  * A JSON encoded list of use cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#use_cases EdgeHostname#use_cases}
  */
  readonly useCases?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#timeouts EdgeHostname#timeouts}
  */
  readonly timeouts?: EdgeHostnameTimeouts;
}
export interface EdgeHostnameTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#default EdgeHostname#default}
  */
  readonly default?: string;
}

export function edgeHostnameTimeoutsToTerraform(struct?: EdgeHostnameTimeoutsOutputReference | EdgeHostnameTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function edgeHostnameTimeoutsToHclTerraform(struct?: EdgeHostnameTimeoutsOutputReference | EdgeHostnameTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeHostnameTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeHostnameTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeHostnameTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname akamai_edge_hostname}
*/
export class EdgeHostname extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_edge_hostname";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeHostname resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeHostname to import
  * @param importFromId The id of the existing EdgeHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeHostname to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_edge_hostname", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/edge_hostname akamai_edge_hostname} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeHostnameConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeHostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_edge_hostname',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificate = config.certificate;
    this._contractId = config.contractId;
    this._edgeHostname = config.edgeHostname;
    this._groupId = config.groupId;
    this._id = config.id;
    this._ipBehavior = config.ipBehavior;
    this._productId = config.productId;
    this._statusUpdateEmail = config.statusUpdateEmail;
    this._ttl = config.ttl;
    this._useCases = config.useCases;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: true, required: false
  private _certificate?: number; 
  public get certificate() {
    return this.getNumberAttribute('certificate');
  }
  public set certificate(value: number) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // edge_hostname - computed: false, optional: false, required: true
  private _edgeHostname?: string; 
  public get edgeHostname() {
    return this.getStringAttribute('edge_hostname');
  }
  public set edgeHostname(value: string) {
    this._edgeHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeHostnameInput() {
    return this._edgeHostname;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // ip_behavior - computed: false, optional: false, required: true
  private _ipBehavior?: string; 
  public get ipBehavior() {
    return this.getStringAttribute('ip_behavior');
  }
  public set ipBehavior(value: string) {
    this._ipBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBehaviorInput() {
    return this._ipBehavior;
  }

  // product_id - computed: true, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // status_update_email - computed: false, optional: true, required: false
  private _statusUpdateEmail?: string[]; 
  public get statusUpdateEmail() {
    return this.getListAttribute('status_update_email');
  }
  public set statusUpdateEmail(value: string[]) {
    this._statusUpdateEmail = value;
  }
  public resetStatusUpdateEmail() {
    this._statusUpdateEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUpdateEmailInput() {
    return this._statusUpdateEmail;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // use_cases - computed: false, optional: true, required: false
  private _useCases?: string; 
  public get useCases() {
    return this.getStringAttribute('use_cases');
  }
  public set useCases(value: string) {
    this._useCases = value;
  }
  public resetUseCases() {
    this._useCases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCasesInput() {
    return this._useCases;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EdgeHostnameTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EdgeHostnameTimeouts) {
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
      certificate: cdktf.numberToTerraform(this._certificate),
      contract_id: cdktf.stringToTerraform(this._contractId),
      edge_hostname: cdktf.stringToTerraform(this._edgeHostname),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      ip_behavior: cdktf.stringToTerraform(this._ipBehavior),
      product_id: cdktf.stringToTerraform(this._productId),
      status_update_email: cdktf.listMapper(cdktf.stringToTerraform, false)(this._statusUpdateEmail),
      ttl: cdktf.numberToTerraform(this._ttl),
      use_cases: cdktf.stringToTerraform(this._useCases),
      timeouts: edgeHostnameTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.numberToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_hostname: {
        value: cdktf.stringToHclTerraform(this._edgeHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      ip_behavior: {
        value: cdktf.stringToHclTerraform(this._ipBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_update_email: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._statusUpdateEmail),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_cases: {
        value: cdktf.stringToHclTerraform(this._useCases),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: edgeHostnameTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeHostnameTimeoutsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
